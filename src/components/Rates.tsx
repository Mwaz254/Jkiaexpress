import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Rates = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const rateCards = [
    {
      type: 'Standard Sedan',
      baseRate: 'KES 2,000',
      journeyType: 'JKIA to Nairobi CBD',
      features: [
        'Up to 4 passengers',
        'Air conditioning',
        'Standard comfort',
        'Free waiting time (30 mins)',
        'Meet & greet service'
      ]
    },
    {
      type: 'Executive Sedan',
      baseRate: 'KES 3,500',
      journeyType: 'JKIA to Nairobi CBD',
      features: [
        'Up to 4 passengers',
        'Premium comfort',
        'Complimentary water',
        'Free waiting time (45 mins)',
        'Meet & greet service',
        'Professional chauffeur'
      ],
      highlighted: true
    },
    {
      type: 'SUV / Crossover',
      baseRate: 'KES 4,500',
      journeyType: 'JKIA to Nairobi CBD',
      features: [
        'Up to 6 passengers',
        'Spacious comfort',
        'Ample luggage space',
        'Free waiting time (45 mins)',
        'Meet & greet service',
        'Professional chauffeur'
      ]
    }
  ];

  return (
    <section id="rates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Rates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Additional charges may apply for journeys outside the city or extended waiting times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {rateCards.map((card, index) => (
            <div 
              key={index} 
              className={`
                rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2
                ${card.highlighted ? 'border-2 border-yellow-500 relative' : 'border border-gray-200'}
              `}
            >
              {card.highlighted && (
                <div className="bg-yellow-500 text-blue-900 font-bold py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="bg-white p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{card.type}</h3>
                <div className="flex items-center mb-6">
                  <p className="text-3xl font-bold text-blue-900">{card.baseRate}</p>
                  <div className="relative ml-2">
                    <HelpCircle 
                      size={16} 
                      className="text-gray-400 cursor-pointer"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    />
                    {showTooltip && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-blue-900 text-white text-xs p-2 rounded shadow-lg z-10">
                        Base rate for standard journey. Prices may vary based on time of day and specific locations.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-blue-900"></div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-6">{card.journeyType}</p>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`
                    w-full text-center font-bold px-6 py-3 rounded-lg transition-all duration-300 block
                    ${card.highlighted ? 
                      'bg-yellow-500 hover:bg-yellow-600 text-blue-900' : 
                      'bg-blue-900 hover:bg-blue-800 text-white'}
                  `}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom quote for a different route or special requirements?
          </p>
          <a 
            href="#contact" 
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-block"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rates;