import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home, Car, Info, Users, Crown, DollarSign, HelpCircle, PhoneCall, LogIn, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { supabase } from '../lib/supabase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

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

  useEffect(() => {
    // Only try to get session if supabase is properly configured
    const loadUser = async () => {
      try {
        if (supabase && typeof supabase.auth?.getSession === 'function') {
          const { data: { session } } = await supabase.auth.getSession();
          setUser(session?.user ?? null);

          const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
            setUser(session?.user ?? null);
          });

          return () => subscription.unsubscribe();
        }
      } catch (error) {
        console.warn('Auth state loading failed:', error);
      }
    };

    loadUser();
  }, []);

  const handleSignOut = async () => {
    try {
      if (supabase && typeof supabase.auth?.signOut === 'function') {
        await supabase.auth.signOut();
      }
    } catch (error) {
      console.warn('Sign out failed:', error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Services', href: '/services', icon: <Car size={20} /> },
    { name: 'About', href: '/about', icon: <Info size={20} /> },
    { name: 'Fleet', href: '/fleet', icon: <Users size={20} /> },
    { name: 'Executive', href: '/executive', icon: <Crown size={20} /> },
    { name: 'Rates', href: '/rates', icon: <DollarSign size={20} /> },
    { name: 'FAQ', href: '/faq', icon: <HelpCircle size={20} /> },
    { name: 'Contact', href: '/contact', icon: <PhoneCall size={20} /> },
  ];

  return (
    <>
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
                      className={`font-medium hover:text-yellow-500 transition-colors ${
                        scrolled ? 'text-blue-900' : 'text-white'
                      } ${location.pathname === link.href ? 'text-yellow-500' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+254731050573" 
                  className={`flex items-center font-medium ${scrolled ? 'text-blue-900' : 'text-white'} hover:text-yellow-500 transition-colors`}
                  aria-label="Call JKIA Express primary number"
                >
                  <Phone size={18} className="mr-2" />
                  <span>0731 050 573</span>
                </a>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/dashboard"
                      className={`flex items-center font-medium ${
                        scrolled ? 'text-blue-900' : 'text-white'
                      } hover:text-yellow-500 transition-colors`}
                    >
                      <User size={18} className="mr-2" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className={`flex items-center font-medium ${
                      scrolled ? 'text-blue-900' : 'text-white'
                    } hover:text-yellow-500 transition-colors`}
                  >
                    <LogIn size={18} className="mr-2" />
                    Sign In
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`md:hidden p-2 rounded-lg ${
                scrolled ? 'text-blue-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } focus:outline-none transition-colors`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[64px] transition-all duration-300 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="bg-white shadow-lg rounded-b-2xl mx-4 overflow-hidden">
            <div className="container mx-auto py-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3 font-medium rounded-lg transition-colors ${
                        location.pathname === link.href 
                          ? 'bg-yellow-500 text-blue-900' 
                          : 'text-blue-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {user ? (
                  <>
                    <li>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 font-medium rounded-lg transition-colors text-blue-900 hover:bg-gray-50"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 font-medium rounded-lg transition-colors text-blue-900 hover:bg-gray-50"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-3 font-medium rounded-lg transition-colors text-blue-900 hover:bg-gray-50"
                    >
                      Sign In
                    </Link>
                  </li>
                )}
              </ul>
              <div className="mt-6 px-6 pt-6 border-t border-gray-100">
                <a 
                  href="tel:+254731050573" 
                  className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors mb-3"
                  aria-label="Call JKIA Express primary number"
                >
                  <Phone size={18} />
                  <span>0731 050 573</span>
                </a>
                <a 
                  href="tel:+254745667165" 
                  className="flex items-center justify-center gap-2 w-full border-2 border-blue-900 text-blue-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  aria-label="Call JKIA Express alternative number"
                >
                  <Phone size={18} />
                  <span>0745 667 165</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Tabs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 gap-1">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex flex-col items-center justify-center py-2 ${
                location.pathname === link.href
                  ? 'text-yellow-500'
                  : 'text-blue-900'
              }`}
              aria-label={`Navigate to ${link.name}`}
            >
              {link.icon}
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add padding to the bottom of the page on mobile to account for the navigation tabs */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;