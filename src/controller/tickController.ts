import axios from "axios";
import { fetchStripeRevenue } from "../Utils/stripeReport";
import { Request, Response } from "express";
import { TelexSettings } from "../interface";

async function TickEndpoint(req: Request, res: Response) {
  const { channel_id, return_url, settings } = req.body;
  console.log(req.body);

  const platform = settings.find(
    (s: TelexSettings) => s.label === "platform"
  ).default;

  let message;
  if (platform === "stripe") {
    message = await fetchStripeRevenue();
  }

  const data = {
    message,
    username: " Daily Revenue Monitor",
    event_name: "Daily Revenue Report",
    status: "success",
  };

  await axios.post(return_url, data);
  res.status(202).json({ status: "accepted", data });
}

export default TickEndpoint;
