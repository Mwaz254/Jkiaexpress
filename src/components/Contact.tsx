import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CreditCard } from 'lucide-react';

const Contact = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
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
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Book Your Ride</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to book your taxi service or contact us directly for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Booking Request</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
                      name="pickupLocation"
                      required
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
                      name="dropoffLocation"
                      required
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Flight details, special requirements, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  Book Now
                  <Send size={18} className="ml-2" />
                </button>
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

export default Contact;