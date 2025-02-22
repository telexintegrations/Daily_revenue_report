import express from "express";
import TickEndpoint from "../controller/tickController";

const TickRouter = express.Router();

// Routes

TickRouter.route("/tick").post(TickEndpoint);

export { TickRouter };
