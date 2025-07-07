import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

interface SMSRequest {
  name: string
  email: string
  phone?: string
  type: 'inquiry' | 'booking'
  bookingDetails?: {
    pickup: string
    dropoff: string
    date: string
    time: string
    passengers: number
  }
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const { name, email, phone, type, bookingDetails }: SMSRequest = await req.json()

    // AfricasTalking credentials (these should be set as environment variables)
    const username = Deno.env.get('AFRICASTALKING_USERNAME') || 'sandbox'
    const apiKey = Deno.env.get('AFRICASTALKING_API_KEY')
    
    if (!apiKey) {
      throw new Error('AfricasTalking API key not configured')
    }

    const to = '+254731050573'
    const from = 'JKIAExpress'
    
    let message = ''
    
    if (type === 'inquiry') {
      message = `New JKIAExpress inquiry from ${name} (${email})${phone ? ` - Phone: ${phone}` : ''}`
    } else if (type === 'booking') {
      message = `New JKIAExpress booking from ${name} (${email})${phone ? ` - ${phone}` : ''}. ${bookingDetails?.pickup} to ${bookingDetails?.dropoff} on ${bookingDetails?.date} at ${bookingDetails?.time} for ${bookingDetails?.passengers} passenger(s).`
    }

    // Prepare SMS data
    const smsData = new URLSearchParams({
      username: username,
      to: to,
      message: message,
      from: from
    })

    // Send SMS via AfricasTalking
    const response = await fetch('https://api.africastalking.com/version1/messaging', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'apiKey': apiKey
      },
      body: smsData.toString()
    })

    const result = await response.json()

    // Log SMS attempt
    console.log('SMS sent:', {
      timestamp: new Date().toISOString(),
      to: to,
      message: message,
      status: result.SMSMessageData?.Recipients?.[0]?.status || 'unknown',
      response: result
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: 'SMS notification sent successfully',
        data: result
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )

  } catch (error) {
    console.error('SMS sending failed:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to send SMS notification'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
})