import React, { useEffect, useState } from 'react';
import { CreditCard, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

interface PayPalPaymentProps {
  bookingId: string;
  amount: string;
  currency: string;
  description: string;
  onSuccess: (orderData: any) => void;
  onError: (error: any) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({
  bookingId,
  amount,
  currency,
  description,
  onSuccess,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    // Load PayPal SDK
    const loadPayPalScript = () => {
      if (window.paypal) {
        setPaypalLoaded(true);
        setIsLoading(false);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=${currency}`;
      script.async = true;
      
      script.onload = () => {
        setPaypalLoaded(true);
        setIsLoading(false);
      };
      
      script.onerror = () => {
        setError('Failed to load PayPal SDK');
        setIsLoading(false);
      };

      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, [currency]);

  useEffect(() => {
    if (paypalLoaded && window.paypal) {
      renderPayPalButtons();
    }
  }, [paypalLoaded, bookingId, amount, currency, description]);

  const renderPayPalButtons = () => {
    if (!window.paypal) return;

    // Clear existing buttons
    const container = document.getElementById('paypal-button-container');
    if (container) {
      container.innerHTML = '';
    }

    window.paypal.Buttons({
      createOrder: async (data: any, actions: any) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-paypal-order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
              booking_id: bookingId,
              amount: amount,
              currency: currency,
              description: description
            })
          });

          const orderData = await response.json();
          
          if (!orderData.success) {
            throw new Error(orderData.error || 'Failed to create order');
          }

          return orderData.id;
        } catch (error) {
          console.error('Error creating PayPal order:', error);
          setError('Failed to create payment order');
          throw error;
        }
      },

      onApprove: async (data: any, actions: any) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-paypal-order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({ orderID: data.orderID })
          });

          const orderData = await response.json();
          
          if (!orderData.success) {
            throw new Error(orderData.error || 'Failed to capture payment');
          }

          onSuccess(orderData);
        } catch (error) {
          console.error('Error capturing PayPal payment:', error);
          onError(error);
        }
      },

      onError: (err: any) => {
        console.error('PayPal Error:', err);
        setError('Payment failed. Please try again.');
        onError(err);
      },

      onCancel: (data: any) => {
        console.log('PayPal payment cancelled:', data);
        setError('Payment was cancelled');
      },

      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
        height: 50
      }
    }).render('#paypal-button-container');
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
          <span className="ml-3 text-gray-600">Loading secure payment...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <h3 className="text-lg font-bold text-red-800">Payment Error</h3>
        </div>
        <p className="text-red-700 mb-4">{error}</p>
        <button
          onClick={() => {
            setError(null);
            setIsLoading(true);
            window.location.reload();
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-6 w-6 text-green-500" />
        <h3 className="text-xl font-bold text-blue-900">Secure Payment</h3>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-blue-900 mb-2">Payment Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{description}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-bold text-lg">{currency} {amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-medium">#{bookingId.slice(-8)}</span>
          </div>
        </div>
      </div>

      <div id="paypal-button-container" className="mb-4"></div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-4 w-4 text-green-500" />
        <span>Secured by PayPal. Your payment information is encrypted and protected.</span>
      </div>

      <div className="mt-4 space-y-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>SSL encrypted transaction</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>PayPal buyer protection included</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>No card details stored locally</span>
        </div>
      </div>
    </div>
  );
};

export default PayPalPayment;