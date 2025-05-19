import React from 'react';
import { Shield, Check, Star, Clock } from 'lucide-react';

const Executive = () => {
  const benefits = [
    'Latest model luxury vehicles',
    'Professional chauffeurs in formal attire',
    'Complimentary bottled water and newspapers',
    'Wi-Fi enabled vehicles',
    'Extended waiting time (45 minutes)',
    'Priority booking and 24/7 support',
    'Corporate accounts available',
    'Meet & greet service with name board'
  ];

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: 'Premium Service',
      description: 'Experience luxury transportation with our meticulously maintained fleet and professional chauffeurs.'
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: 'VIP Treatment',
      description: 'Enjoy exclusive amenities and personalized service tailored to your preferences.'
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: 'Flexible Scheduling',
      description: 'Available 24/7 with priority booking for our executive service clients.'
    }
  ];

  return (
    <div className="font-poppins">
      <section 
        className="relative bg-cover bg-center h-[70vh] flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Executive Taxi Service
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              Experience luxury transportation with our premium fleet and professional chauffeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block text-center"
              >
                Book Executive Service
              </a>
              <a 
                href="tel:+254745667165" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block text-center"
              >
                Call for Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Premium Executive Transportation
              </h2>
              <p className="text-gray-600 mb-8">
                Our executive service offers a premium transportation experience for discerning clients who expect the highest standards of comfort, reliability, and professionalism.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-6 w-6 text-yellow-500 mr-3" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Executive Vehicle" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg">
                <p className="text-blue-900 font-bold text-xl">Premium Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Executive Service Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium executive service offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Your Executive Service
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Experience luxury transportation with our premium fleet and professional chauffeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
              >
                Make a Booking
              </a>
              <a 
                href="tel:+254745667165" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
              >
                Call for Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Executive;