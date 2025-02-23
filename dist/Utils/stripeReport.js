"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStripeRevenue = fetchStripeRevenue;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
function fetchStripeRevenue() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const startOfDay = Math.floor(today.getTime() / 1000);
            // const endOfDay = Math.floor(today.getTime() + 1);
            const endOfDay = Math.floor(new Date(today.setHours(23, 59, 59)).getTime() / 1000);
            const response = yield axios_1.default.get("https://api.stripe.com/v1/balance_transactions", {
                headers: { Authorization: `Bearer ${env_1.config.STRIPE_SECRET_KEY}` },
                params: {
                    created: {
                        gte: startOfDay, // Start of the day in seconds
                        lt: endOfDay, // End of the day in seconds
                    },
                    // status: "succeeded",
                },
            });
            const totalRevenue = response.data.data.reduce((sum, txn) => sum + txn.amount, 0) / 100;
            console.log(response.data.object);
            // return `Stripe Revenue`;
            return `Stripe Revenue: $${totalRevenue}`;
            return;
        }
        catch (error) {
            return `Stripe revenue check failed: ${error.message}`;
        }
    });
}
