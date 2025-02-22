import axios from "axios";

async function fetchStripeRevenue() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfDay = Math.floor(today.getTime() / 1000);

    const response = await axios.get(
      "https://api.stripe.com/v1/payment_intents",
      {
        headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` },
        params: { created: { gte: startOfDay }, status: "succeeded" },
      }
    );

    const totalRevenue =
      response.data.data.reduce(
        (sum: number, txn: any) => sum + txn.amount,
        0
      ) / 100;
    return `Stripe Revenue: $${totalRevenue}`;
  } catch (error: any) {
    return `Stripe revenue check failed: ${error.message}`;
  }
}

export { fetchStripeRevenue };
