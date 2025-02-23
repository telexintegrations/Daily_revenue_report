"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickRouter = void 0;
const express_1 = __importDefault(require("express"));
const tickController_1 = __importDefault(require("../controller/tickController"));
const TickRouter = express_1.default.Router();
exports.TickRouter = TickRouter;
// Routes
TickRouter.route("/tick").post(tickController_1.default);
