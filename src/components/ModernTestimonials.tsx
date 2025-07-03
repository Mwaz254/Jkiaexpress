import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const ModernTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Executive',
      company: 'Tech Solutions Ltd',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote: 'JKIA Express is truly the best JKIA taxi service I have used. Their reliable airport transfer with secure PayPal payment makes business travel stress-free. Professional drivers and always on time for JKIA pickup.',
      rating: 5,
      tripCount: '50+ JKIA trips',
      videoTestimonial: true
    },
    {
      name: 'Michael Chen',
      role: 'International Tourist',
      company: 'Travel Blogger',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote: 'As someone who travels frequently to Nairobi, I can confidently say JKIA Express provides the best airport transfer service. The PayPal payment system is convenient and secure. Highly recommend this JKIA taxi service.',
      rating: 5,
      tripCount: '25+ airport transfers',
      videoTestimonial: false
    },
    {
      name: 'Grace Wanjiku',
      role: 'Local Resident',
      company: 'Marketing Manager',
      avatar: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote: 'I use JKIA Express for all my family airport transfers. They are the most reliable JKIA taxi service with transparent PayPal payment. My elderly parents feel safe with their professional drivers and excellent service.',
      rating: 5,
      tripCount: '30+ family trips',
      videoTestimonial: false
    },
    {
      name: 'David Ochieng',
      role: 'Corporate Client',
      company: 'Financial Services',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote: 'Our company has been using JKIA Express for corporate airport transfer for 3 years. Their PayPal billing system is efficient, and they always accommodate our last-minute JKIA taxi booking requests. Best service in Nairobi!',
      rating: 5,
      tripCount: '100+ corporate trips',
      videoTestimonial: true
    },
    {
      name: 'Emma Thompson',
      role: 'Frequent Flyer',
      company: 'Consultant',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote: 'The flight tracking feature is amazing! Even when my flight was delayed by 3 hours, the JKIA taxi driver was there waiting. No extra charges and secure PayPal payment. This is the best JKIA airport transfer service.',
      rating: 5,
      tripCount: '40+ JKIA pickups',
      videoTestimonial: false
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say About Best JKIA Taxi Service</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-blue-100 ml-2 text-lg">4.9/5 • 10,000+ Reviews</span>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Trusted by thousands for reliable JKIA airport transfer with secure PayPal payment
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Customer Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={currentTestimonial.avatar}
                      alt={`${currentTestimonial.name} - Best JKIA taxi service customer`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500"
                    />
                    {currentTestimonial.videoTestimonial && (
                      <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                        <Play size={24} className="text-white ml-1" />
                      </button>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{currentTestimonial.name}</h3>
                  <p className="text-blue-200 mb-1">{currentTestimonial.role}</p>
                  <p className="text-blue-300 text-sm mb-4">{currentTestimonial.company}</p>
                  
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="bg-yellow-500/20 rounded-lg px-4 py-2 inline-block">
                    <span className="text-yellow-300 font-medium">{currentTestimonial.tripCount}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Quote size={48} className="text-yellow-500/30 absolute -top-4 -left-4" />
                    <blockquote className="text-xl md:text-2xl leading-relaxed italic pl-8">
                      "{currentTestimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Customer Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">10,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">50,000+</div>
              <div className="text-blue-200">Successful JKIA Trips</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">8+</div>
              <div className="text-blue-200">Years Best Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;