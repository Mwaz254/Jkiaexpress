import React from 'react';
import { Car, UserCheck, Clock, CreditCard, Shield, MapPin } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-yellow-500" />,
      title: 'Airport Transfers',
      description: 'Reliable and punctual airport pickup and drop-off services from JKIA to any destination in Nairobi and beyond.',
      details: [
        'Flight tracking and monitoring',
        'Meet & greet service',
        'Assistance with luggage',
        'Flexible booking options'
      ]
    },
    {
      icon: <UserCheck className="h-12 w-12 text-yellow-500" />,
      title: 'Professional Drivers',
      description: 'Our experienced, vetted drivers ensure your safety and comfort throughout your journey.',
      details: [
        'Trained in defensive driving',
        'Annual refresher courses',
        'Biannual mentoring by accredited mentors',
        'Professional conduct and appearance'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: '24/7 Availability',
      description: 'Available around the clock for all your transportation needs, including late-night airport pickups.',
      details: [
        'Round-the-clock service',
        'Instant booking confirmation',
        'Real-time driver tracking',
        'Emergency support'
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
      title: 'Flexible Payment',
      description: 'Multiple payment options available, including cash, mobile money, and card payments for your convenience.',
      details: [
        'M-Pesa payments accepted',
        'Credit/debit cards',
        'Cash payments',
        'Corporate billing available'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: 'Safety First',
      description: 'Your safety is our top priority with comprehensive safety measures and protocols.',
      details: [
        'Regular vehicle maintenance',
        'Safety equipment on board',
        'GPS tracking',
        'Insurance coverage'
      ]
    },
    {
      icon: <MapPin className="h-12 w-12 text-yellow-500" />,
      title: 'Local Expertise',
      description: 'Our drivers know Nairobi inside out, ensuring efficient routes and timely arrivals.',
      details: [
        'Knowledge of alternate routes',
        'Traffic updates',
        'Local area expertise',
        'Tourist spot recommendations'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Experience premium transportation services tailored to your needs with our comprehensive range of offerings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Book?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our premium services firsthand. Book your ride now or contact us for special requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Book Now
            </a>
            <a 
              href="tel:+254745667165" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;