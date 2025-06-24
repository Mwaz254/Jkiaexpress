import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

const About = () => {
  const benefits = [
    'Licensed and insured professional service',
    'Experienced drivers trained in defensive driving, refreshed yearly',
    'Drivers mentored biannually by accredited driver mentors',
    'Clean, comfortable, and well-maintained vehicles',
    'Competitive and transparent pricing',
    'Punctual pickups and reliable service',
    'Local knowledge of Nairobi and surrounding areas',
    'Additional charges apply for Nairobi Expressway usage'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                About JKIA Express
              </h2>
            </div>
            <p className="text-xl font-semibold text-blue-900 mb-4">
              Your Journey, Our Priority
            </p>
            <p className="text-gray-600 mb-6">
              JKIA Express is Nairobi's premier taxi service, dedicated to providing reliable, 
              comfortable, and safe transportation services. Based at Jomo Kenyatta International Airport, 
              we serve both local and international clients with distinction.
            </p>
            <p className="text-gray-600 mb-6">
              Established with a commitment to excellence, we pride ourselves on punctuality, 
              professionalism, and customer satisfaction. Our fleet of well-maintained vehicles and 
              team of expertly trained drivers ensure you reach your destination safely and comfortably.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block text-center hover:scale-105"
              >
                Book Our Service
              </a>
              <a 
                href="/executive" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block text-center hover:scale-105"
              >
                Executive Service
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nairobi City Night Skyline" 
                className="w-full h-full object-cover object-center rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-blue-900 text-white py-4 px-6 rounded-tr-lg">
                <p className="text-sm font-medium">Serving Nairobi since 2015</p>
                <p className="text-2xl font-bold">Reliable & Professional</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-lg shadow-lg hidden md:block transform hover:scale-105 transition-transform duration-300">
              <p className="text-blue-900 font-bold text-xl">100% Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;