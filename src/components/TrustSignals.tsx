import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const TrustSignals = () => {
  const certifications = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed by Kenya Bureau of Standards with comprehensive insurance coverage'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: 'Certified Drivers',
      description: 'All drivers are professionally trained and certified with clean driving records'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: '10,000+ Happy Customers',
      description: 'Trusted by thousands of satisfied customers since 2015'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency assistance'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Absolutely reliable! I use JKIA Express for all my business trips. Professional drivers and always on time.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Tourist',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Great service from airport to hotel. Clean vehicles, fair prices, and the driver was very helpful with local tips.',
      rating: 5
    },
    {
      name: 'Grace Wanjiku',
      role: 'Local Resident',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'I recommend JKIA Express to all my friends and family. Safe, comfortable, and reasonably priced.',
      rating: 5
    }
  ];

  const safetyFeatures = [
    'GPS tracking on all vehicles',
    'Background-checked drivers',
    'Real-time trip monitoring',
    'Emergency contact system',
    'Regular vehicle maintenance',
    'Comprehensive insurance coverage'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose JKIA Express?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Your safety and satisfaction are our top priorities. Here's why thousands trust us with their transportation needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-50 transition-colors duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">What Our Customers Say</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.9/5 based on 500+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Your Safety is Our Priority</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="/about"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
                >
                  Learn More About Our Safety Standards
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional driver with vehicle"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Safety Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;