import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { IntergrationSettings } from "./constants/IntegrationSettings";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Basic Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/integrationjson", (req: Request, res: Response) => {
  res.json(IntergrationSettings);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
