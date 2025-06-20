import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CreditCard, Shield, AlertTriangle } from 'lucide-react';
import { SecurityUtils, CSRFProtection } from '../utils/security';

const SecureContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '',
    message: '',
    expressway: false
  });

  const [csrfToken, setCsrfToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState('');
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Generate CSRF token on component mount
    const token = CSRFProtection.generateToken();
    setCsrfToken(token);

    // Detect if user is likely a bot
    if (SecurityUtils.detectBot()) {
      console.warn('Potential bot detected');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    // Sanitize input
    const sanitizedValue = type === 'checkbox' ? checked : SecurityUtils.sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    try {
      // Honeypot check (hidden field that bots might fill)
      if (honeypot) {
        throw new Error('Spam detected');
      }

      // Rate limiting check
      const clientId = `${navigator.userAgent}_${window.location.hostname}`;
      if (!SecurityUtils.checkRateLimit(clientId, 3, 300000)) {
        throw new Error('Too many submission attempts. Please wait 5 minutes before trying again.');
      }

      // CSRF token validation
      if (!CSRFProtection.validateToken(csrfToken)) {
        throw new Error('Security token invalid. Please refresh the page.');
      }

      // Validate form data
      const validation = SecurityUtils.validateFormData(formData);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      // Additional security checks
      if (submitAttempts > 5) {
        throw new Error('Maximum submission attempts exceeded');
      }

      // Create form data for Netlify
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'booking-request');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('phone', formData.phone);
      netlifyFormData.append('pickup-location', formData.pickupLocation);
      netlifyFormData.append('dropoff-location', formData.dropoffLocation);
      netlifyFormData.append('date', formData.date);
      netlifyFormData.append('time', formData.time);
      netlifyFormData.append('passengers', formData.passengers);
      netlifyFormData.append('message', formData.message);
      netlifyFormData.append('expressway', formData.expressway.toString());
      netlifyFormData.append('csrf_token', csrfToken);

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking request');
      }

      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        passengers: '',
        message: '',
        expressway: false
      });

      // Generate new CSRF token
      const newToken = CSRFProtection.generateToken();
      setCsrfToken(newToken);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setErrors([errorMessage]);
      setSubmitAttempts(prev => prev + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-12 w-12 text-green-500" />
                <div>
                  <h2 className="text-3xl font-bold text-green-600">Booking Submitted!</h2>
                  <p className="text-gray-600 mt-2">
                    Thank you for your booking request. We will contact you shortly to confirm your reservation.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900">What happens next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• We'll call you within 30 minutes to confirm details</li>
                  <li>• You'll receive an SMS confirmation with driver details</li>
                  <li>• Our driver will contact you 15 minutes before pickup</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Make Another Booking
                </button>
                <a
                  href="tel:+254745667165"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 text-center"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Secure Booking</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your information is protected with enterprise-grade security. Fill out the form below to book your taxi service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Booking Request</h3>
              
              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-800">Please correct the following errors:</span>
                  </div>
                  <ul className="list-disc list-inside text-red-700">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form 
                name="booking-request" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="website"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="booking-request" />

                {/* Honeypot field - hidden from users */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human:
                    <input
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* CSRF Token */}
                <input type="hidden" name="csrf_token" value={csrfToken} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Number of Passengers*</label>
                    <select
                      id="passengers"
                      name="passengers"
                      required
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1 passenger</option>
                      <option value="2">2 passengers</option>
                      <option value="3">3 passengers</option>
                      <option value="4">4 passengers</option>
                      <option value="5">5 passengers</option>
                      <option value="6">6 passengers</option>
                      <option value="7+">7+ passengers</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location*</label>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickup-location"
                      required
                      maxLength={200}
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">Dropoff Location*</label>
                    <input
                      type="text"
                      id="dropoffLocation"
                      name="dropoff-location"
                      required
                      maxLength={200}
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time*</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="expressway"
                    name="expressway"
                    checked={formData.expressway}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                  />
                  <label htmlFor="expressway" className="ml-2 block text-sm text-gray-700">
                    Use Nairobi Expressway (Additional charges apply)
                  </label>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Flight details, special requirements, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Secure Book Now
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>

                <div className="text-xs text-gray-500 mt-4">
                  <Shield className="inline h-4 w-4 mr-1" />
                  Your information is encrypted and protected by enterprise-grade security measures.
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone Numbers</p>
                    <p className="mt-1">
                      <a href="tel:+254745667165" className="hover:text-yellow-500 transition-colors">0745 667 165</a>
                    </p>
                    <p>
                      <a href="tel:+254731050573" className="hover:text-yellow-500 transition-colors">0731 050 573</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1">
                      <a href="mailto:info@jkiaexpress.co.ke" className="hover:text-yellow-500 transition-colors">info@jkiaexpress.co.ke</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CreditCard className="w-5 h-5 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Payment Methods</p>
                    <p className="mt-1">M-Pesa Till: 123456</p>
                    <p>Cash & Card Payments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="mt-1">Jomo Kenyatta International Airport (JKIA), Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="text-xl font-bold mb-4">Hours of Operation</h4>
                <p className="mb-2">24 hours a day</p>
                <p>7 days a week</p>
              </div>
              
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8197563127266!2d36.92113511475856!3d-1.3196591990363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e225e25c5f%3A0x737d6e9e7722a1b7!2sJomo%20Kenyatta%20International%20Airport!5e0!3m2!1sen!2sus!4v1647856732345!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureContact;