import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Rates from './components/Rates';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Fleet />
      <Testimonials />
      <Rates />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;