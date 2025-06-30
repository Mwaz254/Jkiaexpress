import React from 'react';
import { CreditCard, Smartphone, Banknote, Shield, CheckCircle } from 'lucide-react';

const PaymentOptions = () => {
  const paymentMethods = [
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: 'M-Pesa',
      description: 'Pay securely with M-Pesa mobile money',
      details: ['Instant payment confirmation', 'No cash handling required', 'SMS receipt provided'],
      popular: true
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-500" />,
      title: 'Credit/Debit Cards',
      description: 'All major cards accepted',
      details: ['Visa, Mastercard accepted', 'Secure payment processing', 'Contactless payments available'],
      popular: false
    },
    {
      icon: <Banknote className="h-8 w-8 text-yellow-500" />,
      title: 'Cash Payment',
      description: 'Traditional cash payments accepted',
      details: ['Pay directly to driver', 'Exact change appreciated', 'Receipt provided on request'],
      popular: false
    }
  ];

  const securityFeatures = [
    'PCI DSS compliant payment processing',
    'SSL encrypted transactions',
    'No card details stored',
    'Fraud protection enabled',
    'Instant payment confirmation',
    'Secure receipt delivery'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Secure Payment Options</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from multiple secure payment methods for your convenience. All transactions are protected with bank-level security.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${method.popular ? 'border-green-500' : 'border-gray-100'}`}>
              {method.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>

              <ul className="space-y-3">
                {method.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold text-blue-900">Bank-Level Security</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Your payment information is protected with the same security standards used by major banks. 
                We never store your card details and all transactions are encrypted.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-lg font-medium text-blue-900 mb-2">Secure Transactions</div>
                <div className="text-gray-600 text-sm">
                  Over 50,000 successful payments processed with zero security incidents
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Billing */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Corporate Billing Available</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              For businesses and frequent travelers, we offer convenient corporate billing solutions with monthly invoicing and detailed trip reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Setup Corporate Account
              </a>
              <a
                href="tel:+254731050573"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;