import React from 'react';
import { Shield, CheckCircle, Star, CreditCard } from 'lucide-react';

const PaymentOptions = () => {
  const paymentFeatures = [
    'Secure PayPal payment processing',
    'Buyer protection included',
    'No cash handling required',
    'Instant payment confirmation',
    'Mobile-friendly checkout',
    'International payment support'
  ];

  const securityFeatures = [
    'SSL encrypted transactions',
    'PayPal fraud protection',
    'No card details stored locally',
    'Secure payment gateway',
    'Instant receipt delivery',
    'Dispute resolution support'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Secure PayPal Payment</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We accept secure PayPal payments for your safety and convenience. No cash handling means better security for everyone.
          </p>
        </div>

        {/* PayPal Payment Method */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star size={16} className="fill-current" />
                Preferred Payment Method
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">PayPal Payment</h3>
              <p className="text-gray-600 mb-6">
                Secure, fast, and reliable payment processing through PayPal. Pay with your PayPal account, credit card, or debit card.
              </p>
              
              {/* PayPal Button */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMTAwIDI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIuMjUgNy4yNUgxNi43NUMxOC4yNSA3LjI1IDE5LjUgOC41IDE5LjUgMTBWMTZDMTkuNSAxNy41IDE4LjI1IDE4Ljc1IDE2Ljc1IDE4Ljc1SDEyLjI1VjcuMjVaIiBmaWxsPSIjMDA5Q0RFIi8+CjxwYXRoIGQ9Ik0yMS43NSA3LjI1SDI2LjI1QzI3Ljc1IDcuMjUgMjkgOC41IDI5IDEwVjE2QzI5IDE3LjUgMjcuNzUgMTguNzUgMjYuMjUgMTguNzVIMjEuNzVWNy4yNVoiIGZpbGw9IiMwMDlDREUiLz4KPHN2Zz4K" 
                    alt="PayPal" 
                    className="h-8"
                  />
                  <span className="text-2xl font-bold">PayPal</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Payments processed securely through: cymohmwaz@yahoo.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">Payment Features</h4>
                <ul className="space-y-3">
                  {paymentFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">Security Features</h4>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Security Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold text-blue-900">Why PayPal Only?</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Enhanced Security:</strong> PayPal provides world-class fraud protection and secure payment processing, ensuring your financial information is always safe.
                </p>
                <p>
                  <strong>Driver Safety:</strong> By eliminating cash transactions, we protect our drivers from potential security risks and ensure a safer working environment.
                </p>
                <p>
                  <strong>Transparency:</strong> All transactions are digitally recorded, providing complete transparency and accountability for both customers and our service.
                </p>
                <p>
                  <strong>Convenience:</strong> Pay from anywhere in the world with your PayPal account, credit card, or debit card through PayPal's secure platform.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-lg font-medium text-blue-900 mb-2">Secure Transactions</div>
                <div className="text-gray-600 text-sm">
                  Over 50,000 successful PayPal payments processed with zero security incidents
                </div>
                <div className="mt-4 flex justify-center">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMTAwIDI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIuMjUgNy4yNUgxNi43NUMxOC4yNSA3LjI1IDE5LjUgOC41IDE5LjUgMTBWMTZDMTkuNSAxNy41IDE4LjI1IDE4Ljc1IDE2Ljc1IDE4Ljc1SDEyLjI1VjcuMjVaIiBmaWxsPSIjMDA5Q0RFIi8+CjxwYXRoIGQ9Ik0yMS43NSA3LjI1SDI2LjI1QzI3Ljc1IDcuMjUgMjkgOC41IDI5IDEwVjE2QzI5IDE3LjUgMjcuNzUgMTguNzUgMjYuMjUgMTguNzVIMjEuNzVWNy4yNVoiIGZpbGw9IiMwMDlDREUiLz4KPHN2Zz4K" 
                    alt="PayPal Verified" 
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Pay */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">How to Pay with PayPal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Book Your Ride</h4>
                <p className="text-blue-100 text-sm">Complete our booking form with your trip details</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Receive PayPal Invoice</h4>
                <p className="text-blue-100 text-sm">We'll send you a secure PayPal payment request</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Pay Securely</h4>
                <p className="text-blue-100 text-sm">Complete payment through PayPal's secure platform</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Book Your Secure Ride Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;