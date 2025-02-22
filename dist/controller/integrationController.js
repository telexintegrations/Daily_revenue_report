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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelexIntegrationJson = getTelexIntegrationJson;
function getTelexIntegrationJson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
                integration_type: "interval",
                key_features: [
                    "Fetches revenue data from  Stripe API",
                    "Sends daily report to Telex",
                    "Automated and scheduled execution",
                    "Configurable reporting interval",
                ],
                integration_category: "Finance & Payments",
                author: "Nwachukwu goodness",
                permissions: {
                    monitoring_user: {
                        always_online: true,
                        display_name: "Revenue Report",
                    },
                },
                settings: [
                    { label: "platform", type: "text", required: true, default: "stripe" },
                    {
                        label: "interval",
                        type: "text",
                        required: true,
                        default: "* * * * *",
                    },
                ],
                target_url: "https://ping.telex.im/v1/webhooks/01952256-033d-7cd7-9999-10143cddcdee",
                tick_url: `${baseUrl}/tick`,
            },
        });
    });
}
