import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Car, Clock, CreditCard } from 'lucide-react';

interface FareEstimate {
  baseRate: number;
  expresswayFee: number;
  total: number;
  vehicleType: string;
  estimatedTime: string;
}

const FareCalculator = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicleType, setVehicleType] = useState('standard');
  const [useExpressway, setUseExpressway] = useState(false);
  const [estimate, setEstimate] = useState<FareEstimate | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const vehicleTypes = [
    { id: 'standard', name: 'Standard Sedan', baseRate: 2000, capacity: '1-4 passengers' },
    { id: 'executive', name: 'Executive Sedan', baseRate: 3500, capacity: '1-4 passengers' },
    { id: 'suv', name: 'SUV/Crossover', baseRate: 4500, capacity: '1-6 passengers' },
    { id: 'van', name: 'Van/Minibus', baseRate: 6000, capacity: '6-14 passengers' }
  ];

  const popularRoutes = [
    { from: 'JKIA Terminal 1A', to: 'Nairobi CBD', distance: 18 },
    { from: 'JKIA Terminal 1B', to: 'Westlands', distance: 22 },
    { from: 'JKIA Terminal 1C', to: 'Karen', distance: 25 },
    { from: 'JKIA', to: 'Kilimani', distance: 20 },
    { from: 'JKIA', to: 'Lavington', distance: 24 },
    { from: 'JKIA', to: 'Runda', distance: 28 }
  ];

  const calculateFare = () => {
    if (!pickup || !dropoff) return;

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const selectedVehicle = vehicleTypes.find(v => v.id === vehicleType)!;
      let baseRate = selectedVehicle.baseRate;
      
      // Distance-based pricing adjustments
      const route = popularRoutes.find(r => 
        (pickup.toLowerCase().includes(r.from.toLowerCase()) || r.from.toLowerCase().includes(pickup.toLowerCase())) &&
        (dropoff.toLowerCase().includes(r.to.toLowerCase()) || r.to.toLowerCase().includes(dropoff.toLowerCase()))
      );
      
      if (route) {
        // Adjust based on distance
        if (route.distance > 25) baseRate += 500;
        else if (route.distance > 30) baseRate += 1000;
      } else {
        // Default adjustment for unknown routes
        baseRate += 300;
      }

      const expresswayFee = useExpressway ? 300 : 0;
      const total = baseRate + expresswayFee;
      const estimatedTime = route ? `${Math.ceil(route.distance / 25 * 60)} mins` : '45-60 mins';

      setEstimate({
        baseRate,
        expresswayFee,
        total,
        vehicleType: selectedVehicle.name,
        estimatedTime
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Instant Fare Calculator</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get transparent, upfront pricing for your journey. No hidden fees, no surprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1 text-green-500" />
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="e.g., JKIA Terminal 1A"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1 text-red-500" />
                    Dropoff Location
                  </label>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="e.g., Nairobi CBD, Westlands"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Car className="inline h-4 w-4 mr-1 text-blue-500" />
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {vehicleTypes.map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.capacity}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="expressway-calc"
                    checked={useExpressway}
                    onChange={(e) => setUseExpressway(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="expressway-calc" className="ml-2 text-sm text-gray-700">
                    Use Nairobi Expressway (+KES 300)
                  </label>
                </div>

                <button
                  onClick={calculateFare}
                  disabled={!pickup || !dropoff || isCalculating}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-blue-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div>
                      Calculating...
                    </div>
                  ) : (
                    'Calculate Fare'
                  )}
                </button>
              </div>

              {/* Results */}
              <div className="bg-gray-50 rounded-xl p-6">
                {estimate ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Your Fare Estimate</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Vehicle:</span>
                        <span className="font-medium">{estimate.vehicleType}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Base Fare:</span>
                        <span className="font-medium">KES {estimate.baseRate.toLocaleString()}</span>
                      </div>
                      
                      {estimate.expresswayFee > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Expressway Fee:</span>
                          <span className="font-medium">KES {estimate.expresswayFee}</span>
                        </div>
                      )}
                      
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-blue-900">Total:</span>
                          <span className="text-2xl font-bold text-green-600">KES {estimate.total.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Estimated time: {estimate.estimatedTime}
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <a
                        href="/contact"
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center block"
                      >
                        Book This Trip
                      </a>
                      <a
                        href="tel:+254731050573"
                        className="w-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors text-center block"
                      >
                        Call to Confirm
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Calculate</h3>
                    <p className="text-gray-600">Enter your pickup and dropoff locations to get an instant fare estimate.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularRoutes.map((route, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPickup(route.from);
                    setDropoff(route.to);
                  }}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-yellow-500 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-blue-900">{route.from}</p>
                      <p className="text-sm text-gray-600">to {route.to}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{route.distance}km</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareCalculator;