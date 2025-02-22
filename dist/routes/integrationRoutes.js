"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJsonRouter = void 0;
const express_1 = __importDefault(require("express"));
const integrationController_1 = require("../controller/integrationController");
const IntegrationJsonRouter = express_1.default.Router();
exports.IntegrationJsonRouter = IntegrationJsonRouter;
// Routes
IntegrationJsonRouter.route("/integration.json").get(integrationController_1.getTelexIntegrationJson);
