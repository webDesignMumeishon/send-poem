import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const origin = process.env.NEXT_BASE_URL
const priceId = process.env.PRICE_ID

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const poemId = formData.get('poemId') as string;
    const customerEmail = formData.get('customerEmail') as string; // Retrieve the email from the form

    if (!customerEmail) {
        return NextResponse.json(
            { error: 'Customer email is required' },
            { status: 400 }
        );
    }

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            customer_email: customerEmail,
            success_url: `${origin}/success?poemId=${poemId}`,
            cancel_url: `${origin}`,
            automatic_tax: { enabled: false },
        });
        return NextResponse.redirect(session.url || '', 303);
    } catch (err: unknown) {
        if (err instanceof Stripe.errors.StripeError) {
            return NextResponse.json(
                { error: err.message },
                { status: err.statusCode || 500 }
            );
        } else {
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            );
        }
    }
}
