import React, { useState } from 'react';
import { Check, Star, ArrowRight, Calculator } from 'lucide-react';

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('airport');

  const pricingCategories = {
    airport: {
      title: 'Airport Transfers',
      description: 'From/To JKIA to various Nairobi destinations',
      routes: [
        { destination: 'Nairobi CBD', standard: 2000, executive: 3500, suv: 4500, time: '45-60 mins' },
        { destination: 'Westlands', standard: 2200, executive: 3800, suv: 4800, time: '50-65 mins' },
        { destination: 'Karen', standard: 2500, executive: 4000, suv: 5000, time: '40-55 mins' },
        { destination: 'Kilimani', standard: 2100, executive: 3600, suv: 4600, time: '45-60 mins' },
        { destination: 'Lavington', standard: 2400, executive: 3900, suv: 4900, time: '50-65 mins' },
        { destination: 'Runda', standard: 2800, executive: 4300, suv: 5300, time: '55-70 mins' },
        { destination: 'Gigiri', standard: 2600, executive: 4100, suv: 5100, time: '50-65 mins' },
        { destination: 'Muthaiga', standard: 2700, executive: 4200, suv: 5200, time: '55-70 mins' }
      ]
    },
    city: {
      title: 'City Transfers',
      description: 'Within Nairobi city and suburbs',
      routes: [
        { destination: 'CBD to Westlands', standard: 800, executive: 1200, suv: 1500, time: '20-30 mins' },
        { destination: 'CBD to Karen', standard: 1200, executive: 1800, suv: 2200, time: '30-45 mins' },
        { destination: 'Westlands to Karen', standard: 1000, executive: 1500, suv: 1800, time: '25-35 mins' },
        { destination: 'CBD to Kilimani', standard: 600, executive: 900, suv: 1200, time: '15-25 mins' },
        { destination: 'Westlands to Runda', standard: 800, executive: 1200, suv: 1500, time: '20-30 mins' },
        { destination: 'Karen to Lavington', standard: 900, executive: 1300, suv: 1600, time: '25-35 mins' }
      ]
    },
    outstation: {
      title: 'Out of Town',
      description: 'Long distance transfers to other cities',
      routes: [
        { destination: 'Nakuru', standard: 8000, executive: 12000, suv: 15000, time: '2-3 hours' },
        { destination: 'Mombasa', standard: 25000, executive: 35000, suv: 40000, time: '8-10 hours' },
        { destination: 'Kisumu', standard: 15000, executive: 22000, suv: 28000, time: '5-6 hours' },
        { destination: 'Eldoret', standard: 12000, executive: 18000, suv: 22000, time: '4-5 hours' },
        { destination: 'Nyeri', standard: 6000, executive: 9000, suv: 11000, time: '2-3 hours' },
        { destination: 'Machakos', standard: 3000, executive: 4500, suv: 5500, time: '1-2 hours' }
      ]
    }
  };

  const vehicleTypes = [
    {
      name: 'Standard Sedan',
      key: 'standard',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases',
      features: ['Air conditioning', 'Professional driver', 'GPS tracking']
    },
    {
      name: 'Executive Sedan',
      key: 'executive',
      capacity: '1-4 passengers',
      luggage: '2-3 suitcases',
      features: ['Premium comfort', 'Wi-Fi', 'Bottled water', 'Extended waiting'],
      popular: true
    },
    {
      name: 'SUV/Crossover',
      key: 'suv',
      capacity: '1-6 passengers',
      luggage: '4-5 suitcases',
      features: ['Spacious interior', 'Extra luggage space', 'Higher ground clearance']
    }
  ];

  const additionalServices = [
    { service: 'Nairobi Expressway usage', price: 300, unit: 'per trip' },
    { service: 'Additional waiting time', price: 500, unit: 'per hour' },
    { service: 'Child car seat', price: 200, unit: 'per trip' },
    { service: 'Meet & greet service', price: 0, unit: 'included' },
    { service: 'Flight tracking', price: 0, unit: 'included' },
    { service: 'SMS updates', price: 0, unit: 'included' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Transparent Pricing</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No hidden fees, no surprises. Our competitive rates are designed to provide excellent value for premium service.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(pricingCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white text-blue-900 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-900 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{pricingCategories[selectedCategory].title}</h3>
            <p className="text-blue-100">{pricingCategories[selectedCategory].description}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900">Destination</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">Standard Sedan</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900 relative">
                    Executive Sedan
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-blue-900 text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">SUV/Crossover</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">Est. Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pricingCategories[selectedCategory].routes.map((route, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{route.destination}</td>
                    <td className="px-6 py-4 text-center text-gray-900">KES {route.standard.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-gray-900 bg-yellow-50">KES {route.executive.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-gray-900">KES {route.suv.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-gray-600 text-sm">{route.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vehicle Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicleTypes.map((vehicle, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-2 ${vehicle.popular ? 'border-yellow-500' : 'border-gray-100'} relative`}>
              {vehicle.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} className="fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-blue-900 mb-2">{vehicle.name}</h3>
              <p className="text-gray-600 mb-4">{vehicle.capacity} • {vehicle.luggage}</p>
              
              <ul className="space-y-2">
                {vehicle.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Additional Services & Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{item.service}</span>
                <span className={`font-bold ${item.price === 0 ? 'text-green-600' : 'text-blue-900'}`}>
                  {item.price === 0 ? 'FREE' : `KES ${item.price}`}
                  <span className="text-xs text-gray-500 ml-1">{item.unit}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Ride?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get instant quotes and book your preferred vehicle type. All prices include professional driver, fuel, and basic waiting time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Instant Quote
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="tel:+254731050573"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Call for Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;