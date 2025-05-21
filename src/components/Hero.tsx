import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.pexels.com/photos/1595232/pexels-photo-1595232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            Your Reliable Airport <span className="text-yellow-500">Taxi Service</span> in Nairobi
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 text-white">
            Professional, safe, and comfortable transportation from JKIA to anywhere in Nairobi and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              Book a Ride
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="tel:+254745667165" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center">
              <div className="h-12 w-0.5 bg-yellow-500 mr-4"></div>
              <div>
                <p className="text-yellow-500 font-medium">Call Us</p>
                <p className="text-white font-bold">0745 667 165</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-0.5 bg-yellow-500 mr-4"></div>
              <div>
                <p className="text-yellow-500 font-medium">Or</p>
                <p className="text-white font-bold">0731 050 573</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white hover:text-yellow-500 transition-colors p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;