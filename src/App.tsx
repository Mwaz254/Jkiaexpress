import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FleetPage = lazy(() => import('./pages/FleetPage'));
const Executive = lazy(() => import('./components/Executive'));
const Rates = lazy(() => import('./components/Rates'));
const Faq = lazy(() => import('./components/Faq'));
const EnhancedSecureContact = lazy(() => import('./components/EnhancedSecureContact'));
const SecureAuth = lazy(() => import('./components/SecureAuth'));
const UserDashboard = lazy(() => import('./components/UserDashboard'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="font-poppins">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/executive" element={<Executive />} />
              <Route path="/rates" element={<Rates />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<EnhancedSecureContact />} />
              <Route path="/login" element={<SecureAuth />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;