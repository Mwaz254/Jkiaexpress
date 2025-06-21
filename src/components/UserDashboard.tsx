import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, User, LogOut, Car, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { DatabaseService, Booking } from '../lib/database';

const UserDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      setUser(user);

      // Load user bookings
      const { data: bookingsData, error: bookingsError } = await DatabaseService.getUserBookings(user.id);
      if (bookingsError) {
        throw new Error('Failed to load bookings');
      }

      setBookings(bookingsData || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Car className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{user?.email}</h3>
                <p className="text-gray-600">Customer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="text-sm">{user?.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span className="text-sm">Member since {new Date(user?.created_at).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                <a
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  New Booking
                </a>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-12">
                  <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No bookings yet</h3>
                  <p className="text-gray-600 mb-6">Start by making your first booking with us.</p>
                  <a
                    href="/contact"
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    Make a Booking
                  </a>
                </div>
              ) : (
                <div className="space-y-6">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(booking.status || 'pending')}
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              Booking #{booking.id?.slice(-8)}
                            </h3>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status || 'pending')}`}>
                              {booking.status?.replace('_', ' ').toUpperCase() || 'PENDING'}
                            </span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>Created: {new Date(booking.created_at || '').toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Pickup</p>
                            <p className="text-gray-600">{booking.pickup_location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Dropoff</p>
                            <p className="text-gray-600">{booking.dropoff_location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{new Date(booking.booking_date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{booking.booking_time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>{booking.passengers} passenger{booking.passengers > 1 ? 's' : ''}</span>
                        </div>
                      </div>

                      {booking.message && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Additional Info:</strong> {booking.message}
                          </p>
                        </div>
                      )}

                      {booking.use_expressway && (
                        <div className="mt-2">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Expressway Route
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;