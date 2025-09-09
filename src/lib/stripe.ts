// src/lib/stripe.ts
import { loadStripe } from '@stripe/stripe-js';

let stripePromise: ReturnType<typeof loadStripe>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');
  }
  return stripePromise;
};

// Simple hook for client checkout
export const useStripeCheckout = () => {
  const handleCheckout = async ({ priceId, quantity }: { priceId: string; quantity: number }) => {
    const stripe = await getStripe();
    if (!stripe) {
      console.error('Stripe failed to load.');
      return;
    }

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId, quantity }),
    });

    const { sessionId } = await res.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error(error.message);
    }
  };

  return { handleCheckout };
};
 