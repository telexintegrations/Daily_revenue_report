import { Request, Response } from "express";

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
      is_acctive: true,
      author: "Nwachukwu goodness",
      integration_type: "interval",
      settings: [
        { label: "platform", type: "text", required: true, default: "stripe" },
        {
          label: "interval",
          type: "text",
          required: true,
          default: "0 0 * * *",
        },
      ],
      target_url:
        "https://ping.telex.im/v1/webhooks/01952256-033d-7cd7-9999-10143cddcdee",
      tick_url: `${baseUrl}/tick`,
    },
  });
}
export { getTelexIntegrationJson };
