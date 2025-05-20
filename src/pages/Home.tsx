import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Fleet from '../components/Fleet';
import Testimonials from '../components/Testimonials';
import Rates from '../components/Rates';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

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
      <Contact />
    </>
  );
};

export default Home;