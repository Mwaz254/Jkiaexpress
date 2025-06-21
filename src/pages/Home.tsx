import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Fleet from '../components/Fleet';
import Testimonials from '../components/Testimonials';
import Rates from '../components/Rates';
import Faq from '../components/Faq';
import EnhancedSecureContact from '../components/EnhancedSecureContact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Fleet />
      <Testimonials />
      <Rates />
      <Faq />
      <EnhancedSecureContact />
    </>
  );
};

export default Home;