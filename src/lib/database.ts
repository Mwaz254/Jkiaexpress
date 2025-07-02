import { supabase } from './supabase';

export interface Booking {
  id?: string;
  user_id?: string;
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  dropoff_location: string;
  booking_date: string;
  booking_time: string;
  passengers: number;
  message?: string;
  use_expressway: boolean;
  status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
  created_at?: string;
}

export class DatabaseService {
  // Check if Supabase is properly configured
  private static isSupabaseConfigured(): boolean {
    try {
      return supabase && typeof supabase.from === 'function';
    } catch {
      return false;
    }
  }

  // Booking operations
  static async createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Booking | null; error: any }> {
    try {
      if (!this.isSupabaseConfigured()) {
        // Simulate successful booking for demo purposes
        const mockBooking: Booking = {
          id: 'mock-' + Date.now(),
          ...booking,
          passengers: parseInt(booking.passengers.toString()),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          status: 'pending'
        };
        return { data: mockBooking, error: null };
      }

      const { data: { user } } = await supabase.auth.getUser();
      
      const bookingData = {
        ...booking,
        user_id: user?.id || null,
        passengers: parseInt(booking.passengers.toString()),
      };

      const { data, error } = await supabase
        .from('bookings')
        .insert([bookingData])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.warn('Database operation failed:', error);
      return { data: null, error };
    }
  }

  static async getUserBookings(userId: string): Promise<{ data: Booking[] | null; error: any }> {
    try {
      if (!this.isSupabaseConfigured()) {
        // Return empty array for demo
        return { data: [], error: null };
      }

      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      console.warn('Database operation failed:', error);
      return { data: [], error: null };
    }
  }

  static async updateBookingStatus(bookingId: string, status: Booking['status']): Promise<{ data: Booking | null; error: any }> {
    try {
      if (!this.isSupabaseConfigured()) {
        return { data: null, error: new Error('Supabase not configured') };
      }

      const { data, error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', bookingId)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.warn('Database operation failed:', error);
      return { data: null, error };
    }
  }

  // Contact message operations
  static async createContactMessage(message: Omit<ContactMessage, 'id' | 'created_at'>): Promise<{ data: ContactMessage | null; error: any }> {
    try {
      if (!this.isSupabaseConfigured()) {
        // Simulate successful message creation
        const mockMessage: ContactMessage = {
          id: 'mock-' + Date.now(),
          ...message,
          created_at: new Date().toISOString(),
          status: 'new'
        };
        return { data: mockMessage, error: null };
      }

      const { data, error } = await supabase
        .from('contact_messages')
        .insert([message])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.warn('Database operation failed:', error);
      return { data: null, error };
    }
  }

  // Utility functions
  static async testConnection(): Promise<boolean> {
    try {
      if (!this.isSupabaseConfigured()) {
        return false;
      }

      const { data, error } = await supabase
        .from('bookings')
        .select('count')
        .limit(1);

      return !error;
    } catch (error) {
      console.warn('Database connection test failed:', error);
      return false;
    }
  }
}