import express from "express";
import { getTelexIntegrationJson } from "../controller/integrationController";

const IntegrationJsonRouter = express.Router();

// Routes

IntegrationJsonRouter.route("/integration.json").get(getTelexIntegrationJson);

export { IntegrationJsonRouter };
