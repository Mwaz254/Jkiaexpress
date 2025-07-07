import React, { useEffect, useState } from 'react';
import { CheckCircle, Download, Phone, Mail, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface BookingDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  dropoff_location: string;
  booking_date: string;
  booking_time: string;
  passengers: number;
  status: string;
  created_at: string;
}

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const orderId = searchParams.get('order');

  useEffect(() => {
    // In a real implementation, you would fetch booking details using the order ID
    // For now, we'll simulate booking data
    const simulateBookingData = () => {
      const mockBooking: BookingDetails = {
        id: orderId || 'BOOK-' + Date.now(),
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+254712345678',
        pickup_location: 'JKIA Terminal 1A',
        dropoff_location: 'Nairobi CBD',
        booking_date: new Date().toISOString().split('T')[0],
        booking_time: '14:30',
        passengers: 2,
        status: 'confirmed',
        created_at: new Date().toISOString()
      };
      
      setBooking(mockBooking);
      setLoading(false);
    };

    setTimeout(simulateBookingData, 1000);
  }, [orderId]);

  const generatePDF = () => {
    // In a real implementation, you would generate a proper PDF
    // For now, we'll create a simple text representation
    if (!booking) return;

    const content = `
JKIA EXPRESS - BOOKING CONFIRMATION

Booking ID: ${booking.id}
Status: ${booking.status.toUpperCase()}
Date Created: ${new Date(booking.created_at).toLocaleString()}

CUSTOMER DETAILS:
Name: ${booking.name}
Email: ${booking.email}
Phone: ${booking.phone}

TRIP DETAILS:
From: ${booking.pickup_location}
To: ${booking.dropoff_location}
Date: ${booking.booking_date}
Time: ${booking.booking_time}
Passengers: ${booking.passengers}

PAYMENT STATUS: CONFIRMED
Payment Method: PayPal
Order ID: ${orderId}

Thank you for choosing JKIA Express!
Contact: 0731 050 573
Email: cymohmwaz@yahoo.com
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `JKIA-Express-Booking-${booking.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find your booking details.</p>
          <a
            href="/contact"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Make New Booking
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <div>
                <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
                <p className="text-gray-600 mt-2">Your JKIA taxi booking has been confirmed</p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-800 mb-2">Booking Confirmed</h2>
              <p className="text-green-700">
                Thank you for choosing JKIA Express! Your payment has been processed successfully 
                and your booking is confirmed. You will receive SMS and email confirmations shortly.
              </p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trip Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Trip Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Pickup Location</p>
                    <p className="text-gray-600">{booking.pickup_location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Dropoff Location</p>
                    <p className="text-gray-600">{booking.dropoff_location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">Date & Time</p>
                    <p className="text-gray-600">{booking.booking_date} at {booking.booking_time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">Passengers</p>
                    <p className="text-gray-600">{booking.passengers} passenger{booking.passengers > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Booking Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Booking ID</p>
                  <p className="text-gray-600 font-mono">#{booking.id}</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Status</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {booking.status.toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Payment Method</p>
                  <p className="text-gray-600">PayPal</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Order ID</p>
                  <p className="text-gray-600 font-mono">{orderId}</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900">Booking Date</p>
                  <p className="text-gray-600">{new Date(booking.created_at).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">SMS confirmation sent to your phone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Email confirmation with trip details</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Driver contact 15 minutes before pickup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-700">Safe and comfortable journey</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={generatePDF}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Confirmation
            </button>
            
            <a
              href="tel:+254731050573"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Us: 0731 050 573
            </a>
            
            <a
              href="mailto:cymohmwaz@yahoo.com"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Support
            </a>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">24/7 Customer Support</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600">0731 050 573</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600">cymohmwaz@yahoo.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Emergency Contact</h4>
                <p className="text-gray-600">
                  If you need immediate assistance or have any issues with your pickup, 
                  please call our 24/7 hotline immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;