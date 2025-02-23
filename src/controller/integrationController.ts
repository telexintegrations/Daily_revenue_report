import { Request, Response } from "express";
import { config } from "../config/env";

async function getTelexIntegrationJson(req: Request, res: Response) {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  res.json({
    data: {
      date: {
        created_at: new Date().toISOString().split("T")[0],
        updated_at: new Date().toISOString().split("T")[0],
      },
      descriptions: {
        app_name: "Daily Revenue Report",
        app_description: "Tracks daily revenue from Stripe or PayPal",
        app_url: baseUrl,
        app_logo: "https://cdn-icons-png.flaticon.com/128/15178/15178455.png",
        background_color: "#fff",
      },
      is_active: true,
      integration_type: "interval",
      key_features: [
        "Fetches revenue data from  Stripe API",
        "Sends daily report to Telex",
        "Automated and scheduled execution",
        "Configurable reporting interval",
      ],
      integration_category: "Finance & Payments",
      author: "Nwachukwu goodness",
      permissions: {
        monitoring_user: {
          always_online: true,
          display_name: "Revenue Report",
        },
      },
      settings: [
        { label: "platform", type: "text", required: true, default: "stripe" },
        {
          label: "interval",
          type: "text",
          required: true,
          default: "*/3 * * * *",
        },
      ],
      target_url: config.TELEX_WEBHOOK_URL,
      tick_url: `${baseUrl}/tick`,
    },
  });
}
export { getTelexIntegrationJson };
