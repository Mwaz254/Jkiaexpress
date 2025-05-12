import React from 'react';
import { Car, UserCheck, Clock, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-yellow-500" />,
      title: 'Airport Transfers',
      description: 'Reliable and punctual airport pickup and drop-off services from JKIA to any destination in Nairobi and beyond.'
    },
    {
      icon: <UserCheck className="h-12 w-12 text-yellow-500" />,
      title: 'Professional Drivers',
      description: 'Our experienced, vetted drivers ensure your safety and comfort throughout your journey.'
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: '24/7 Availability',
      description: 'Available around the clock for all your transportation needs, including late-night airport pickups.'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
      title: 'Flexible Payment',
      description: 'Multiple payment options available, including cash, mobile money, and card payments for your convenience.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comfortable and reliable transportation with our range of premium taxi services.
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
      </div>
    </section>
  );
};

export default Services;