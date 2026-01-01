import type { VercelRequest, VercelResponse } from '@vercel/node';

// Stripe is initialized with the secret key from environment variables
// NEVER expose this key in client-side code!
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    if (!STRIPE_SECRET_KEY) {
        console.error('STRIPE_SECRET_KEY is not configured');
        return response.status(500).json({ error: 'Payment system not configured' });
    }

    try {
        const { nights, totalPrice, checkIn, checkOut, guestName, guestEmail } = request.body;

        // Dynamically import Stripe to avoid issues
        const Stripe = (await import('stripe')).default;
        const stripe = new Stripe(STRIPE_SECRET_KEY, {
            apiVersion: '2023-10-16',
        });

        // Create a Checkout Session with the booking details
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'brl',
                        product_data: {
                            name: 'Casa Carolina Moreré - Booking',
                            description: `${nights} nights: ${checkIn} to ${checkOut}`,
                            images: ['https://casacarolinamorere-media.s3.fr-par.scw.cloud/Maison%20depuis%20la%20plage.jpg'],
                        },
                        unit_amount: Math.round(totalPrice * 100), // Stripe uses cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${request.headers.origin || 'https://casacarolinamorere.com'}/#/booking?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.headers.origin || 'https://casacarolinamorere.com'}/#/booking?canceled=true`,
            customer_email: guestEmail,
            metadata: {
                guestName,
                checkIn,
                checkOut,
                nights: nights.toString(),
            },
        });

        response.status(200).json({
            sessionId: session.id,
            url: session.url
        });

    } catch (error: any) {
        console.error('Stripe Checkout Error:', error);
        response.status(500).json({
            error: 'Failed to create checkout session',
            details: error.message
        });
    }
}
