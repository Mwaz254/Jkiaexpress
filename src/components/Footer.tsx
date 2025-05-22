import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

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
              Your trusted taxi service at Jomo Kenyatta International Airport, providing safe and comfortable transportation services throughout Nairobi and beyond.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/jkiaexpress" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/jkiaexpress" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/jkiaexpress" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#rates" className="text-gray-300 hover:text-yellow-500 transition-colors">Rates</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <p>0745 667 165</p>
                  <p>0731 050 573</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <p>info@jkiaexpress.co.ke</p>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <p>JKIA, Nairobi, Kenya</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Operating Hours</h4>
            <p className="text-gray-300 mb-4">
              We are available 24/7, 365 days a year to serve your transportation needs.
            </p>
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="font-bold">Need a ride?</p>
              <a 
                href="tel:+254745667165" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2 rounded-lg mt-3 inline-block transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} JKIA Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;