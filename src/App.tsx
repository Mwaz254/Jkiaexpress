import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Executive from './components/Executive';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/executive" element={<Executive />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;