import React from 'react';
import { Car, UserCheck, Clock, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-yellow-500" />,
      title: 'Best JKIA Airport Transfer',
      description: 'Reliable and punctual JKIA airport pickup and drop-off services to any destination in Nairobi and beyond with secure PayPal payment.'
    },
    {
      icon: <UserCheck className="h-12 w-12 text-yellow-500" />,
      title: 'Professional JKIA Taxi Drivers',
      description: 'Our experienced, vetted drivers ensure your safety and comfort throughout your Nairobi airport taxi journey.'
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: '24/7 JKIA Taxi Service',
      description: 'Available around the clock for all your JKIA transportation needs, including late-night airport pickups with reliable service.'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
      title: 'PayPal Secure Payment',
      description: 'Secure PayPal payment processing for your safety and convenience. No cash handling means better security for everyone.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Best JKIA Taxi Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best JKIA taxi service with comfortable and reliable airport transfer with secure PayPal payment options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
          >
            Book Best JKIA Taxi Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;