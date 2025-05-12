import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Licensed and insured professional service',
    'Experienced and vetted drivers',
    'Clean, comfortable, and well-maintained vehicles',
    'Competitive and transparent pricing',
    'Punctual pickups and reliable service',
    'Local knowledge of Nairobi and surrounding areas'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About JKIA Express
            </h2>
            <p className="text-gray-600 mb-6">
              JKIA Express is a premier taxi service based at Jomo Kenyatta International Airport, 
              dedicated to providing reliable, comfortable, and safe transportation services to visitors 
              and residents in Nairobi, Kenya.
            </p>
            <p className="text-gray-600 mb-6">
              Established with a commitment to excellence, we pride ourselves on punctuality, 
              professionalism, and customer satisfaction. Our fleet of well-maintained vehicles and 
              team of experienced drivers ensure you reach your destination safely and comfortably.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
            >
              Book Our Service
            </a>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="JKIA Express Taxi Service" 
                className="w-full h-full object-cover object-center rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-blue-900 text-white py-4 px-6 rounded-tr-lg">
                <p className="text-sm font-medium">Serving Nairobi since 2015</p>
                <p className="text-2xl font-bold">Reliable & Professional</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-blue-900 font-bold text-xl">100% Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;