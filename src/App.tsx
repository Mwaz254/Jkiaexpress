import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FleetPage from './pages/FleetPage';
import Executive from './components/Executive';
import Rates from './components/Rates';
import Faq from './components/Faq';
import SecureContact from './components/SecureContact';
import SecureAuth from './components/SecureAuth';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/executive" element={<Executive />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<SecureContact />} />
          <Route path="/login" element={<SecureAuth />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;