import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

interface CaptureRequest {
  orderID: string
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const { orderID }: CaptureRequest = await req.json()

    // PayPal credentials
    const clientId = Deno.env.get('PAYPAL_CLIENT_ID')
    const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET')
    const environment = Deno.env.get('PAYPAL_ENVIRONMENT') || 'sandbox'
    
    if (!clientId || !clientSecret) {
      throw new Error('PayPal credentials not configured')
    }

    const baseURL = environment === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com'

    // Get PayPal access token
    const authResponse = await fetch(`${baseURL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      body: 'grant_type=client_credentials'
    })

    const authData = await authResponse.json()
    
    if (!authData.access_token) {
      throw new Error('Failed to get PayPal access token')
    }

    // Capture PayPal order
    const captureResponse = await fetch(`${baseURL}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.access_token}`
      }
    })

    const captureData = await captureResponse.json()

    if (captureData.status === 'COMPLETED') {
      // Initialize Supabase client
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      const supabase = createClient(supabaseUrl, supabaseServiceKey)

      // Update booking status to paid
      const bookingId = captureData.purchase_units?.[0]?.reference_id
      
      if (bookingId) {
        const { error } = await supabase
          .from('bookings')
          .update({ 
            status: 'confirmed',
            updated_at: new Date().toISOString()
          })
          .eq('id', bookingId)

        if (error) {
          console.error('Failed to update booking status:', error)
        }
      }

      // Log successful payment
      console.log('PayPal payment captured:', {
        timestamp: new Date().toISOString(),
        orderId: orderID,
        bookingId: bookingId,
        payerId: captureData.payer?.payer_id,
        amount: captureData.purchase_units?.[0]?.payments?.captures?.[0]?.amount,
        status: captureData.status
      })

      return new Response(
        JSON.stringify({
          success: true,
          id: orderID,
          payer: captureData.payer,
          status: captureData.status,
          order: captureData
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    } else {
      throw new Error(`Payment capture failed with status: ${captureData.status}`)
    }

  } catch (error) {
    console.error('PayPal order capture failed:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to capture PayPal payment'
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