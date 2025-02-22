import express from "express";
import "dotenv/config";
import "express-async-errors";
import cron from "node-cron";
import cors from "cors";
import { IntegrationJsonRouter } from "./routes/integrationRoutes";
import { TickRouter } from "./routes/TickRoutes";

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Telex integration ");
});

app.use("/", IntegrationJsonRouter);
app.use("/", TickRouter);

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

start();
