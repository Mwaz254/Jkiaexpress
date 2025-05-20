import React from 'react';
import { Check, Info } from 'lucide-react';

const FleetPage = () => {
  const vehicles = [
    {
      name: 'Standard Sedan',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comfortable sedans perfect for 1-4 passengers with reasonable luggage',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases',
      features: [
        'Air conditioning',
        'Comfortable seating',
        'USB charging',
        'Professional driver',
        'Flight tracking',
        'Meet & greet service'
      ],
      rate: 'From KES 2,000'
    },
    {
      name: 'Executive Sedan',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Luxury sedans offering premium comfort for business travelers and discerning guests',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases',
      features: [
        'Premium leather seats',
        'Climate control',
        'Wi-Fi enabled',
        'Bottled water',
        'Newspapers available',
        'Extended waiting time',
        'Professional chauffeur',
        'Priority booking'
      ],
      rate: 'From KES 3,500'
    },
    {
      name: 'SUV / Crossover',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Spacious SUVs ideal for families or groups with extra luggage requirements',
      capacity: '1-6 passengers',
      luggage: '4-5 suitcases',
      features: [
        'Spacious interior',
        'Climate control',
        'USB charging',
        'Extra luggage space',
        'Professional driver',
        'Meet & greet service',
        'Comfortable seating',
        'Higher ground clearance'
      ],
      rate: 'From KES 4,500'
    },
    {
      name: 'Van / Minibus',
      image: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Larger vehicles perfect for groups, tours, or corporate events with ample space',
      capacity: '6-14 passengers',
      luggage: '10+ suitcases',
      features: [
        'Spacious seating',
        'Climate control',
        'Large luggage space',
        'Professional driver',
        'Group booking',
        'Meet & greet service',
        'USB charging',
        'Perfect for tours'
      ],
      rate: 'From KES 6,000'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl max-w-2xl">
            Choose from our range of well-maintained vehicles to suit your specific needs and preferences.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">{vehicle.name}</h3>
                    <span className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full font-bold">
                      {vehicle.rate}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Info className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-gray-600">Capacity: {vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-gray-600">Luggage: {vehicle.luggage}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-blue-900 mb-4">Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-yellow-500 mr-2" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a 
                      href="/contact" 
                      className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-block text-center w-full"
                    >
                      Book This Vehicle
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for special requirements or custom transportation solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
            <a 
              href="tel:+254745667165" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;