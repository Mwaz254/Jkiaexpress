import React from 'react';
import { Car, UserCheck, Clock, CreditCard, Shield, MapPin } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-yellow-500" />,
      title: 'Best JKIA Airport Transfer',
      description: 'Reliable and punctual JKIA airport pickup and drop-off services to any destination in Nairobi and beyond with secure PayPal payment.',
      details: [
        'Flight tracking and monitoring for JKIA arrivals',
        'Meet & greet service at JKIA terminals',
        'Professional assistance with luggage',
        'Flexible booking options for airport transfer'
      ]
    },
    {
      icon: <UserCheck className="h-12 w-12 text-yellow-500" />,
      title: 'Professional JKIA Taxi Drivers',
      description: 'Our experienced, vetted drivers ensure your safety and comfort throughout your Nairobi airport taxi journey.',
      details: [
        'Trained in defensive driving techniques',
        'Annual refresher courses for safety',
        'Biannual mentoring by accredited mentors',
        'Professional conduct and appearance standards'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: '24/7 JKIA Taxi Availability',
      description: 'Available around the clock for all your JKIA transportation needs, including late-night airport pickups with reliable service.',
      details: [
        'Round-the-clock JKIA taxi service',
        'Instant booking confirmation',
        'Real-time driver tracking',
        'Emergency support for airport transfer'
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
      title: 'PayPal Secure Payment',
      description: 'Secure PayPal payment processing for your safety and convenience. No cash handling means better security for everyone.',
      details: [
        'PayPal secure payment processing',
        'International payment support',
        'No cash handling for driver safety',
        'Transparent transaction records'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: 'Safety First JKIA Service',
      description: 'Your safety is our top priority with comprehensive safety measures and protocols for the best JKIA taxi experience.',
      details: [
        'Regular vehicle maintenance and inspection',
        'Safety equipment on board all vehicles',
        'GPS tracking for all JKIA trips',
        'Comprehensive insurance coverage'
      ]
    },
    {
      icon: <MapPin className="h-12 w-12 text-yellow-500" />,
      title: 'Local Nairobi Expertise',
      description: 'Our drivers know Nairobi inside out, ensuring efficient routes and timely arrivals for your airport transfer.',
      details: [
        'Knowledge of alternate Nairobi routes',
        'Real-time traffic updates',
        'Local area expertise and recommendations',
        'Tourist spot recommendations in Nairobi'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best JKIA Taxi Services in Nairobi</h1>
          <p className="text-xl max-w-2xl">
            Experience the best JKIA taxi service with premium airport transfer tailored to your needs. Reliable Nairobi airport taxi with secure PayPal payment options.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive JKIA Airport Transfer Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From reliable JKIA pickup to secure PayPal payment, we provide the best airport taxi service in Nairobi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose JKIA Express for Airport Transfer?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2">
                    <Car className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Best JKIA Taxi Fleet</h4>
                    <p className="text-gray-600">Modern, well-maintained vehicles for comfortable airport transfer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2">
                    <CreditCard className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">PayPal Secure Payment</h4>
                    <p className="text-gray-600">Safe and secure payment processing through PayPal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2">
                    <Clock className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">24/7 JKIA Service</h4>
                    <p className="text-gray-600">Round-the-clock availability for all your airport transfer needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1178545/pexels-photo-1178545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Best JKIA taxi service team providing reliable airport transfer in Nairobi" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg">
                <p className="text-blue-900 font-bold text-xl">Best JKIA Taxi</p>
                <p className="text-blue-900 text-sm">Since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book the Best JKIA Taxi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience reliable JKIA airport transfer with secure PayPal payment. Contact us for special requirements or book online now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Book JKIA Taxi Online
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

export default ServicesPage;