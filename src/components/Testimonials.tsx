import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'David Kimani',
      role: 'Business Traveler',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'I\'ve been using JKIA Express for my business trips for over a year now. Their service is consistently excellent, and the drivers are always punctual and professional.',
      rating: 5
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Tourist',
      avatar: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'As a first-time visitor to Kenya, I was relieved to find such a reliable taxi service. My driver was knowledgeable about the city and made me feel safe and comfortable.',
      rating: 5
    },
    {
      name: 'Michael Odhiambo',
      role: 'Corporate Client',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'We use JKIA Express for all our corporate transportation needs. They provide excellent service for our international clients and are always reliable.',
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      className="py-20 bg-blue-900 text-white"
      style={{ 
        backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url('https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="text-center px-4">
                      <div className="mb-8 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-500 opacity-30">
                          <Quote size={80} />
                        </div>
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-yellow-500">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="max-w-2xl mx-auto">
                        <p className="text-xl italic mb-6">{testimonial.quote}</p>
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={24} 
                              className={i < testimonial.rating ? "text-yellow-500" : "text-gray-400"} 
                              fill={i < testimonial.rating ? "#eab308" : "none"} 
                            />
                          ))}
                        </div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-yellow-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-white bg-opacity-30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;