import React from 'react';
import EnhancedHero from '../components/EnhancedHero';
import Services from '../components/Services';
import FareCalculator from '../components/FareCalculator';
import TrustSignals from '../components/TrustSignals';
import About from '../components/About';
import Fleet from '../components/Fleet';
import PricingSection from '../components/PricingSection';
import PaymentOptions from '../components/PaymentOptions';
import ModernTestimonials from '../components/ModernTestimonials';
import SocialProof from '../components/SocialProof';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';
import Faq from '../components/Faq';
import EnhancedSecureContact from '../components/EnhancedSecureContact';

const Home = () => {
  return (
    <>
      <EnhancedHero />
      <Services />
      <FareCalculator />
      <TrustSignals />
      <About />
      <Fleet />
      <PricingSection />
      <PaymentOptions />
      <ModernTestimonials />
      <SocialProof />
      <BlogSection />
      <CTASection />
      <Faq />
      <EnhancedSecureContact />
    </>
  );
};

export default Home;