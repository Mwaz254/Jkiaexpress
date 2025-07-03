import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ExternalLink, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              JKIA<span className="text-yellow-500">Express</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Best JKIA taxi service in Nairobi. Reliable airport transfer with secure PayPal payment. 
              Trusted by 10,000+ customers for safe and comfortable transportation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577234415707" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Follow JKIA Express on Facebook - Best JKIA Taxi Service"
                title="Best JKIA Taxi on Facebook"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://twitter.com/jkiaexpress" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Follow JKIA Express on Twitter - Reliable Airport Taxi"
                title="JKIA Taxi Updates on Twitter"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/jkiaexpress" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Follow JKIA Express on Instagram - Nairobi Airport Taxi"
                title="JKIA Taxi Photos on Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">JKIA Taxi Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">JKIA Taxi Home</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Airport Transfer Services</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Best JKIA Taxi</a>
              </li>
              <li>
                <a href="/fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">Reliable Taxi Fleet</a>
              </li>
              <li>
                <a href="/rates" className="text-gray-300 hover:text-yellow-500 transition-colors">JKIA Taxi Rates</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Book JKIA Taxi</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Best JKIA Taxi</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">24/7 JKIA Taxi Hotline</p>
                  <p className="mt-1">
                    <a href="tel:+254731050573" className="hover:text-yellow-500 transition-colors text-lg font-bold">0731 050 573</a>
                  </p>
                  <p className="text-sm text-gray-300">Best JKIA taxi contact</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email & PayPal</p>
                  <p className="mt-1">
                    <a href="mailto:cymohmwaz@yahoo.com" className="hover:text-yellow-500 transition-colors">cymohmwaz@yahoo.com</a>
                  </p>
                  <p className="text-sm text-gray-300">Secure PayPal payments</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">JKIA Airport Location</p>
                  <p className="mt-1">Jomo Kenyatta International Airport</p>
                  <p className="text-sm text-gray-300">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Secure Payment</h4>
            <div className="bg-blue-800 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="h-5 w-5 text-yellow-500" />
                <span className="font-bold">PayPal Secure Payment</span>
              </div>
              <p className="text-blue-100 text-sm mb-3">
                We accept secure PayPal payments for your safety and convenience.
              </p>
              <a 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors text-sm"
                aria-label="Book JKIA taxi with PayPal payment"
              >
                <Phone size={14} />
                Book JKIA Taxi
              </a>
            </div>
            
            <div>
              <h5 className="font-bold mb-3">Follow Best JKIA Taxi</h5>
              <a 
                href="https://www.facebook.com/profile.php?id=61577234415707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Facebook size={16} />
                <span>Best JKIA Taxi on Facebook</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} JKIA Express - Best JKIA Taxi Service. All rights reserved.</p>
              <p className="text-sm mt-1">Licensed & Insured Professional Airport Taxi Service | PayPal Secure Payments</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-yellow-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;