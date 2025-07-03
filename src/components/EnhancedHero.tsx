import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Star, Play, CheckCircle, MapPin, Clock, CreditCard } from 'lucide-react';

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/1595232/pexels-photo-1595232.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Best JKIA Taxi Service",
      subtitle: "Reliable Airport Transfer Nairobi with Secure PayPal Payment",
      cta: "Book JKIA Taxi Now"
    },
    {
      image: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Trusted JKIA Pickup",
      subtitle: "Professional Nairobi Airport Taxi with PayPal Secure Payment",
      cta: "Book Reliable JKIA Transfer"
    },
    {
      image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "24/7 JKIA Taxi Service",
      subtitle: "Best Airport Transfer Kenya with Online PayPal Booking",
      cta: "Call JKIA Taxi Now"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quickStats = [
    { icon: <Star className="h-5 w-5" />, text: "4.9/5 Best JKIA Taxi" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "10k+ Happy Customers" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 JKIA Service" },
    { icon: <CreditCard className="h-5 w-5" />, text: "PayPal Secure Payment" }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-yellow-500">{stat.icon}</span>
                  <span className="text-white text-sm font-medium">{stat.text}</span>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                  <span key={index} className={index === heroSlides[currentSlide].title.split(' ').length - 1 ? 'text-yellow-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 mb-8 text-white max-w-3xl leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-white">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">PayPal Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">Flight Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 JKIA Pickup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105 group shadow-lg"
                aria-label="Book best JKIA taxi with PayPal payment"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={() => setShowVideo(true)}
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105 group"
              >
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Watch JKIA Taxi Story
              </button>
              
              <a 
                href="tel:+254731050573" 
                className="bg-blue-900/80 backdrop-blur-sm hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105 group"
                aria-label="Call best JKIA taxi service now - 0731050573"
              >
                <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Call JKIA Taxi
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center">
                <div className="h-12 w-1 bg-yellow-500 mr-4"></div>
                <div>
                  <p className="text-yellow-500 font-medium text-sm">Best JKIA Taxi Hotline</p>
                  <p className="text-white font-bold text-lg">
                    <a href="tel:+254731050573" className="hover:text-yellow-500 transition-colors">
                      0731 050 573
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-1 bg-yellow-500 mr-4"></div>
                <div>
                  <p className="text-yellow-500 font-medium text-sm">PayPal Secure Payment</p>
                  <p className="text-white font-bold text-lg">
                    <a href="mailto:cymohmwaz@yahoo.com" className="hover:text-yellow-500 transition-colors">
                      cymohmwaz@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <a 
          href="#services" 
          className="text-white hover:text-yellow-500 transition-colors p-2"
          aria-label="Scroll down to view JKIA taxi services"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-900">About JKIA Express - Best JKIA Taxi Service</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Best JKIA taxi service video content would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnhancedHero;