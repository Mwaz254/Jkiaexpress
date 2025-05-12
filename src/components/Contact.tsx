import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

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
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
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
      message: ''
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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div className="mb-6">
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
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center"
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
                <a 
                  href="https://maps.app.goo.gl/LDPJgNDMfGr2Kgic8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 hover:bg-yellow-500 transition-colors font-bold px-6 py-3 rounded-lg inline-block mt-4 w-full text-center"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;