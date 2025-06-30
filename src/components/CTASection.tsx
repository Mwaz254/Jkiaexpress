import React from 'react';
import { Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full -mr-48 -mb-48"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience premium airport transportation with JKIA Express. Multiple ways to book, all designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-4">Call Now</h3>
            <p className="text-blue-100 mb-6">
              Speak directly with our booking team for immediate assistance and personalized service.
            </p>
            <a
              href="tel:+254731050573"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone size={18} />
              0731 050 573
            </a>
          </div>

          {/* WhatsApp Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
            <p className="text-blue-100 mb-6">
              Quick and easy booking via WhatsApp. Send us your details and get instant confirmation.
            </p>
            <a
              href="https://wa.me/254731050573"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Online Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Online Booking</h3>
            <p className="text-blue-100 mb-6">
              Use our secure online form to book your ride. Get instant quotes and confirmation.
            </p>
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Calendar size={18} />
              Book Online
            </a>
          </div>
        </div>

        {/* Emergency/24-7 Notice */}
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-red-200">24/7 Emergency Service</h3>
          <p className="text-red-100 mb-4">
            Need immediate pickup or have a flight emergency? We're available round the clock.
          </p>
          <a
            href="tel:+254731050573"
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Emergency Hotline: 0731 050 573
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-500 mb-1">24/7</div>
            <div className="text-blue-200 text-sm">Available</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-500 mb-1">5 Min</div>
            <div className="text-blue-200 text-sm">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-500 mb-1">100%</div>
            <div className="text-blue-200 text-sm">Secure</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-500 mb-1">4.9★</div>
            <div className="text-blue-200 text-sm">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;