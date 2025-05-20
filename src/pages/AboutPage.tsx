import React from 'react';
import { CheckCircle, Shield, Award, Users, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      number: '8+',
      label: 'Years of Experience',
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
      label: 'Destinations Served',
      icon: <MapPin className="h-8 w-8 text-yellow-500" />
    }
  ];

  const features = [
    'Licensed and insured professional service',
    'Experienced drivers trained in defensive driving, refreshed yearly',
    'Drivers mentored biannually by accredited driver mentors',
    'Clean, comfortable, and well-maintained vehicles',
    'Competitive and transparent pricing',
    'Punctual pickups and reliable service',
    'Local knowledge of Nairobi and surrounding areas',
    'Additional charges apply for Nairobi Expressway usage',
    '24/7 customer support',
    'Multiple payment options',
    'GPS-tracked vehicles',
    'Comprehensive insurance coverage'
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About JKIA Express</h1>
          <p className="text-xl max-w-2xl">
            Your trusted partner in premium airport transportation services since 2015.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-blue-900">
                  Our Story
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                JKIA Express was founded with a vision to revolutionize airport transportation in Nairobi. 
                Starting from a small fleet of vehicles, we have grown to become one of the most trusted 
                names in airport taxi services, known for our reliability, professionalism, and commitment 
                to customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                Based at Jomo Kenyatta International Airport, we serve both local and international 
                clients with distinction, providing safe, comfortable, and timely transportation services 
                throughout Nairobi and beyond.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1178545/pexels-photo-1178545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="JKIA Express Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg">
                <p className="text-blue-900 font-bold text-xl">Since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Why Choose JKIA Express?
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

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your ride now and experience the difference with JKIA Express.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Book Now
            </a>
            <a 
              href="/fleet" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              View Our Fleet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;