import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Standard Sedan',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comfortable sedans perfect for 1-4 passengers with reasonable luggage',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases'
    },
    {
      name: 'Executive Sedan',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Luxury sedans offering premium comfort for business travelers and discerning guests',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases'
    },
    {
      name: 'SUV / Crossover',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Spacious SUVs ideal for families or groups with extra luggage requirements',
      capacity: '1-6 passengers',
      luggage: '4-5 suitcases'
    },
    {
      name: 'Van / Minibus',
      image: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Larger vehicles perfect for groups, tours, or corporate events with ample space',
      capacity: '6-14 passengers',
      luggage: '10+ suitcases'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1));
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of well-maintained vehicles to suit your specific needs and preferences.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vehicles.map((vehicle, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="h-64 md:h-96 overflow-hidden rounded-lg">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 md:p-8 bg-gray-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">{vehicle.name}</h3>
                      <p className="text-gray-600 mb-6">{vehicle.description}</p>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-32 font-medium text-blue-900">Capacity:</div>
                          <div className="text-gray-600">{vehicle.capacity}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-32 font-medium text-blue-900">Luggage:</div>
                          <div className="text-gray-600">{vehicle.luggage}</div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <a 
                          href="#contact" 
                          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-block"
                        >
                          Book This Vehicle
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Previous vehicle"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Next vehicle"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-900 w-8' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;