export const IntergrationSettings = {
  data: {
    date: {
      created_at: new Date().toISOString().split("T")[0],
      updated_at: new Date().toISOString().split("T")[0],
    },
    descriptions: {
      app_name: "Daily Revenue Report",
      app_description: "Creates and sends a daily revenue report.",
      app_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowU4UV3Sncxajn1Smd8UMnTaN9Mm6mtk5NA&usqp=CAU",
      app_url: "https://5qrmbvtz-5000.uks1.devtunnels.ms/integrationjson",
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
    author: "Goody_love",
    permissions: {
      monitoring_user: {
        always_online: true,
        display_name: "Revenue Report",
      },
    },
    settings: [
      {
        label: "interval",
        type: "text",
        required: true,
        default: "* * * * *",
      },
    ],
    target_url: "",
    tick_url: "",
  },
};
