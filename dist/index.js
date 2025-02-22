"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const integrationRoutes_1 = require("./routes/integrationRoutes");
const TickRoutes_1 = require("./routes/TickRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello, Telex integration ");
});
app.use("/", integrationRoutes_1.IntegrationJsonRouter);
app.use("/", TickRoutes_1.TickRouter);
const start = () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};
start();
