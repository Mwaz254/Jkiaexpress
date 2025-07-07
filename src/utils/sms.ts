// SMS notification utilities
export class SMSService {
  private static readonly SMS_ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-sms`;
  private static readonly AUTH_HEADER = `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`;

  static async sendInquiryNotification(data: {
    name: string;
    email: string;
    phone?: string;
  }): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(this.SMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.AUTH_HEADER
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: 'inquiry'
        })
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send SMS notification');
      }

      return { success: true };
    } catch (error) {
      console.error('SMS notification failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'SMS notification failed' 
      };
    }
  }

  static async sendBookingNotification(data: {
    name: string;
    email: string;
    phone?: string;
    bookingDetails: {
      pickup: string;
      dropoff: string;
      date: string;
      time: string;
      passengers: number;
    };
  }): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(this.SMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.AUTH_HEADER
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: 'booking',
          bookingDetails: data.bookingDetails
        })
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send SMS notification');
      }

      return { success: true };
    } catch (error) {
      console.error('SMS notification failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'SMS notification failed' 
      };
    }
  }
}