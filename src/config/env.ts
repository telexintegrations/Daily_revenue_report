import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || "5000",
  TELEX_WEBHOOK_URL: process.env.TELEX_WEBHOOK_URL || "",
  REVENUE_API_URL: process.env.REVENUE_API_URL || "",
};
