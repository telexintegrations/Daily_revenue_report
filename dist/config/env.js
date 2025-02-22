"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    PORT: process.env.PORT || "5000",
    TELEX_WEBHOOK_URL: process.env.TELEX_WEBHOOK_URL || "",
    REVENUE_API_URL: process.env.REVENUE_API_URL || "",
};
