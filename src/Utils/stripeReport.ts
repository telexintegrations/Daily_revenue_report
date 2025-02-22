import axios from "axios";
import { config } from "../config/env";

async function fetchStripeRevenue() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfDay = Math.floor(today.getTime() / 1000);
    // const endOfDay = Math.floor(today.getTime() + 1);
    const endOfDay = Math.floor(
      new Date(today.setHours(23, 59, 59)).getTime() / 1000
    );

    const response = await axios.get(
      "https://api.stripe.com/v1/balance_transactions",
      {
        headers: { Authorization: `Bearer ${config.STRIPE_SECRET_KEY}` },
        params: {
          created: {
            gte: startOfDay, // Start of the day in seconds
            lt: endOfDay, // End of the day in seconds
          },
          // status: "succeeded",
        },
      }
    );

    const totalRevenue =
      response.data.data.reduce(
        (sum: number, txn: any) => sum + txn.amount,
        0
      ) / 100;

    console.log(response.data.object);
    // return `Stripe Revenue`;

    return `Stripe Revenue: $${totalRevenue}`;
    return;
  } catch (error: any) {
    return `Stripe revenue check failed: ${error.message}`;
  }
}

export { fetchStripeRevenue };
