import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

interface OrderRequest {
  booking_id: string
  amount: string
  currency: string
  description: string
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const { booking_id, amount, currency, description }: OrderRequest = await req.json()

    // PayPal credentials (these should be set as environment variables)
    const clientId = Deno.env.get('PAYPAL_CLIENT_ID')
    const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET')
    const environment = Deno.env.get('PAYPAL_ENVIRONMENT') || 'sandbox' // 'sandbox' or 'live'
    
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

    // Create PayPal order
    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [{
        reference_id: booking_id,
        description: description,
        amount: {
          currency_code: currency,
          value: amount
        }
      }],
      application_context: {
        brand_name: 'JKIA Express',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${req.headers.get('origin')}/booking-success`,
        cancel_url: `${req.headers.get('origin')}/booking-cancelled`
      }
    }

    const orderResponse = await fetch(`${baseURL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.access_token}`
      },
      body: JSON.stringify(orderData)
    })

    const order = await orderResponse.json()

    if (order.id) {
      // Log order creation
      console.log('PayPal order created:', {
        timestamp: new Date().toISOString(),
        orderId: order.id,
        bookingId: booking_id,
        amount: amount,
        currency: currency
      })

      return new Response(
        JSON.stringify({
          success: true,
          id: order.id,
          order: order
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    } else {
      throw new Error('Failed to create PayPal order')
    }

  } catch (error) {
    console.error('PayPal order creation failed:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to create PayPal order'
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