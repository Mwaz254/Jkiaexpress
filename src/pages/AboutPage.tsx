import React from 'react';
import { CheckCircle, Shield, Award, Users, Clock, MapPin, CreditCard } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      number: '8+',
      label: 'Years Best JKIA Taxi',
      icon: <Clock className="h-8 w-8 text-yellow-500" />
    },
    {
      number: '10k+',
      label: 'Satisfied Customers',
      icon: <Users className="h-8 w-8 text-yellow-500" />
    },
    {
      number: '50+',
      label: 'Professional Drivers',
      icon: <Award className="h-8 w-8 text-yellow-500" />
    },
    {
      number: '100+',
      label: 'Nairobi Destinations',
      icon: <MapPin className="h-8 w-8 text-yellow-500" />
    }
  ];

  const features = [
    'Licensed and insured best JKIA taxi service',
    'Experienced drivers trained in defensive driving, refreshed yearly',
    'Drivers mentored biannually by accredited driver mentors',
    'Clean, comfortable, and well-maintained vehicles',
    'Competitive and transparent pricing with PayPal payment',
    'Punctual pickups and reliable JKIA airport transfer',
    'Local knowledge of Nairobi and surrounding areas',
    'Additional charges apply for Nairobi Expressway usage',
    '24/7 customer support for JKIA taxi booking',
    'Secure PayPal payment options only',
    'GPS-tracked vehicles for safety',
    'Comprehensive insurance coverage'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About JKIA Express - Best JKIA Taxi Service</h1>
          <p className="text-xl max-w-2xl">
            Your trusted partner in premium JKIA airport transfer services since 2015. Best JKIA taxi service in Nairobi with secure PayPal payment.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-blue-900">
                  Best JKIA Taxi Service Story
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                JKIA Express was founded with a vision to become the best JKIA taxi service in Nairobi. 
                Starting from a small fleet of vehicles, we have grown to become the most trusted 
                name in JKIA airport transfer services, known for our reliability, professionalism, and 
                secure PayPal payment system.
              </p>
              <p className="text-gray-600 mb-6">
                Based at Jomo Kenyatta International Airport, we serve both local and international 
                clients with distinction, providing safe, comfortable, and timely Nairobi airport taxi 
                services throughout Nairobi and beyond with secure PayPal payment options.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1178545/pexels-photo-1178545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="JKIA Express Team - Best JKIA Taxi Service in Nairobi" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg">
                <p className="text-blue-900 font-bold text-xl">Since 2015</p>
                <p className="text-blue-900 text-sm">Best JKIA Taxi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why We're the Best JKIA Taxi Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands for reliable JKIA airport transfer with secure PayPal payment
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Why Choose JKIA Express - Best JKIA Taxi Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start group">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PayPal Payment Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-blue-900">
                  Secure PayPal Payment Only
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                For enhanced security and transparency, JKIA Express accepts only PayPal payments. 
                This ensures the safety of our drivers and provides complete transaction transparency 
                for our customers.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-blue-900 mb-4">PayPal Payment Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Secure payment processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Driver safety (no cash handling)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Complete transaction transparency</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">International payment support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl p-8">
                <CreditCard className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">PayPal Secure</h3>
                <p className="text-gray-700 mb-4">cymohmwaz@yahoo.com</p>
                <a
                  href="/contact"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Book with PayPal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Best JKIA Taxi Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your reliable JKIA airport transfer now with secure PayPal payment and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Book Best JKIA Taxi
            </a>
            <a 
              href="tel:+254731050573" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Call 0731 050 573
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;