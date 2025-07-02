// Enhanced validation utilities
export class ValidationUtils {
  // Email validation with comprehensive checks
  static validateEmail(email: string): { isValid: boolean; error?: string } {
    try {
      if (!email || typeof email !== 'string' || email.trim().length === 0) {
        return { isValid: false, error: 'Email is required' };
      }

      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      
      if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
      }

      if (email.length > 254) {
        return { isValid: false, error: 'Email address is too long' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Email validation failed:', error);
      return { isValid: false, error: 'Email validation error' };
    }
  }

  // Phone validation for Kenyan numbers
  static validatePhone(phone: string): { isValid: boolean; error?: string } {
    try {
      if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
        return { isValid: false, error: 'Phone number is required' };
      }

      // Remove spaces and special characters
      const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
      
      // Kenyan phone number patterns
      const patterns = [
        /^(\+254|254)[7-9]\d{8}$/, // International format
        /^0[7-9]\d{8}$/, // Local format
      ];

      const isValid = patterns.some(pattern => pattern.test(cleanPhone));
      
      if (!isValid) {
        return { 
          isValid: false, 
          error: 'Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)' 
        };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Phone validation failed:', error);
      return { isValid: false, error: 'Phone validation error' };
    }
  }

  // Name validation
  static validateName(name: string): { isValid: boolean; error?: string } {
    try {
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return { isValid: false, error: 'Name is required' };
      }

      if (name.trim().length < 2) {
        return { isValid: false, error: 'Name must be at least 2 characters long' };
      }

      if (name.length > 100) {
        return { isValid: false, error: 'Name is too long' };
      }

      // Check for suspicious patterns
      const suspiciousPatterns = [
        /<script/i, /javascript:/i, /on\w+=/i, /eval\(/i,
        /union.*select/i, /drop.*table/i, /insert.*into/i
      ];

      if (suspiciousPatterns.some(pattern => pattern.test(name))) {
        return { isValid: false, error: 'Invalid characters in name' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Name validation failed:', error);
      return { isValid: false, error: 'Name validation error' };
    }
  }

  // Location validation
  static validateLocation(location: string): { isValid: boolean; error?: string } {
    try {
      if (!location || typeof location !== 'string' || location.trim().length === 0) {
        return { isValid: false, error: 'Location is required' };
      }

      if (location.trim().length < 3) {
        return { isValid: false, error: 'Location must be at least 3 characters long' };
      }

      if (location.length > 200) {
        return { isValid: false, error: 'Location description is too long' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Location validation failed:', error);
      return { isValid: false, error: 'Location validation error' };
    }
  }

  // Date validation
  static validateDate(date: string): { isValid: boolean; error?: string } {
    try {
      if (!date) {
        return { isValid: false, error: 'Date is required' };
      }

      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (isNaN(selectedDate.getTime())) {
        return { isValid: false, error: 'Invalid date format' };
      }

      if (selectedDate < today) {
        return { isValid: false, error: 'Date cannot be in the past' };
      }

      // Check if date is too far in the future (1 year)
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

      if (selectedDate > oneYearFromNow) {
        return { isValid: false, error: 'Date cannot be more than 1 year in the future' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Date validation failed:', error);
      return { isValid: false, error: 'Date validation error' };
    }
  }

  // Time validation
  static validateTime(time: string): { isValid: boolean; error?: string } {
    try {
      if (!time) {
        return { isValid: false, error: 'Time is required' };
      }

      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timeRegex.test(time)) {
        return { isValid: false, error: 'Please enter a valid time' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Time validation failed:', error);
      return { isValid: false, error: 'Time validation error' };
    }
  }

  // Passengers validation
  static validatePassengers(passengers: string | number): { isValid: boolean; error?: string } {
    try {
      const num = typeof passengers === 'string' ? parseInt(passengers) : passengers;
      
      if (isNaN(num) || num < 1) {
        return { isValid: false, error: 'Please select number of passengers' };
      }

      if (num > 20) {
        return { isValid: false, error: 'Maximum 20 passengers allowed' };
      }

      return { isValid: true };
    } catch (error) {
      console.warn('Passengers validation failed:', error);
      return { isValid: false, error: 'Passengers validation error' };
    }
  }

  // Comprehensive form validation
  static validateBookingForm(formData: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    try {
      const nameValidation = this.validateName(formData.name);
      if (!nameValidation.isValid) errors.push(nameValidation.error!);

      const emailValidation = this.validateEmail(formData.email);
      if (!emailValidation.isValid) errors.push(emailValidation.error!);

      const phoneValidation = this.validatePhone(formData.phone);
      if (!phoneValidation.isValid) errors.push(phoneValidation.error!);

      const pickupValidation = this.validateLocation(formData.pickupLocation);
      if (!pickupValidation.isValid) errors.push(`Pickup location: ${pickupValidation.error!}`);

      const dropoffValidation = this.validateLocation(formData.dropoffLocation);
      if (!dropoffValidation.isValid) errors.push(`Dropoff location: ${dropoffValidation.error!}`);

      const dateValidation = this.validateDate(formData.date);
      if (!dateValidation.isValid) errors.push(dateValidation.error!);

      const timeValidation = this.validateTime(formData.time);
      if (!timeValidation.isValid) errors.push(timeValidation.error!);

      const passengersValidation = this.validatePassengers(formData.passengers);
      if (!passengersValidation.isValid) errors.push(passengersValidation.error!);
    } catch (error) {
      console.warn('Form validation failed:', error);
      errors.push('Form validation error occurred');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}