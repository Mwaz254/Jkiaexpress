import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Fleet', href: '/#fleet' },
    { name: 'Rates', href: '/#rates' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo scrolled={scrolled} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className={`font-medium hover:text-yellow-500 transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href="tel:+254745667165" 
              className={`flex items-center font-medium ${scrolled ? 'text-blue-900' : 'text-white'} hover:text-yellow-500 transition-colors`}
            >
              <Phone size={18} className="mr-2" />
              <span>0745 667 165</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${scrolled ? 'text-blue-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block font-medium text-blue-900 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a 
                href="tel:+254745667165" 
                className="flex items-center font-medium text-blue-900 hover:text-yellow-500 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span>0745 667 165</span>
              </a>
              <a 
                href="tel:+254731050573" 
                className="flex items-center mt-2 font-medium text-blue-900 hover:text-yellow-500 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span>0731 050 573</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;