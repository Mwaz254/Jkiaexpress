// Security utilities for client-side protection

export class SecurityUtils {
  // Sanitize user input to prevent XSS
  static sanitizeInput(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  // Validate email format
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number format
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // Generate secure random string
  static generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Rate limiting for form submissions
  private static submissionTimes: Map<string, number[]> = new Map();

  static checkRateLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 300000): boolean {
    const now = Date.now();
    const attempts = this.submissionTimes.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }
    
    recentAttempts.push(now);
    this.submissionTimes.set(identifier, recentAttempts);
    return true;
  }

  // Detect potential bot behavior
  static detectBot(): boolean {
    // Check for common bot indicators
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'scraper', 'headless',
      'phantom', 'selenium', 'puppeteer'
    ];
    
    return botPatterns.some(pattern => userAgent.includes(pattern));
  }

  // Validate form data integrity
  static validateFormData(data: Record<string, any>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check for required fields
    const requiredFields = ['name', 'email', 'phone'];
    requiredFields.forEach(field => {
      if (!data[field] || typeof data[field] !== 'string' || data[field].trim().length === 0) {
        errors.push(`${field} is required`);
      }
    });

    // Validate email
    if (data.email && !this.isValidEmail(data.email)) {
      errors.push('Invalid email format');
    }

    // Validate phone
    if (data.phone && !this.isValidPhone(data.phone)) {
      errors.push('Invalid phone number format');
    }

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i, /javascript:/i, /on\w+=/i, /eval\(/i,
      /union.*select/i, /drop.*table/i, /insert.*into/i
    ];

    Object.values(data).forEach(value => {
      if (typeof value === 'string') {
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(value)) {
            errors.push('Suspicious content detected');
          }
        });
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// CSRF Protection
export class CSRFProtection {
  private static token: string | null = null;

  static generateToken(): string {
    this.token = SecurityUtils.generateSecureToken();
    sessionStorage.setItem('csrf_token', this.token);
    return this.token;
  }

  static getToken(): string | null {
    if (!this.token) {
      this.token = sessionStorage.getItem('csrf_token');
    }
    return this.token;
  }

  static validateToken(token: string): boolean {
    const storedToken = this.getToken();
    return storedToken !== null && storedToken === token;
  }

  static clearToken(): void {
    this.token = null;
    sessionStorage.removeItem('csrf_token');
  }
}