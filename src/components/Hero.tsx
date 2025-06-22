import React from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.pexels.com/photos/1595232/pexels-photo-1595232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Trust Indicators */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-white text-sm bg-white/20 px-3 py-1 rounded-full">
              4.9/5 Rating • 150+ Reviews
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Your Reliable Airport <span className="text-yellow-500">Taxi Service</span> in Nairobi
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 text-white max-w-2xl">
            Professional, safe, and comfortable transportation from JKIA to anywhere in Nairobi and beyond. 
            Available 24/7 with licensed drivers and modern vehicles.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Licensed Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Fixed Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Flight Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Meet & Greet</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">M-Pesa Payments</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 group"
              aria-label="Book a taxi ride with JKIA Express"
            >
              Book a Ride
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+254731050573" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 group"
              aria-label="Call JKIA Express now for immediate booking"
            >
              <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center">
              <div className="h-12 w-0.5 bg-yellow-500 mr-4"></div>
              <div>
                <p className="text-yellow-500 font-medium text-sm">Primary Number</p>
                <p className="text-white font-bold text-lg">
                  <a href="tel:+254731050573" className="hover:text-yellow-500 transition-colors">
                    0731 050 573
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-0.5 bg-yellow-500 mr-4"></div>
              <div>
                <p className="text-yellow-500 font-medium text-sm">Alternative</p>
                <p className="text-white font-bold text-lg">
                  <a href="tel:+254745667165" className="hover:text-yellow-500 transition-colors">
                    0745 667 165
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#services" 
          className="text-white hover:text-yellow-500 transition-colors p-2"
          aria-label="Scroll down to view our services"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Schema.org structured data for the hero section */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          "name": "Hero Section",
          "description": "JKIA Express premium airport taxi service hero section",
          "url": "https://jkiaexpress.taxi/#hero"
        })}
      </script>
    </section>
  );
};

export default Hero;