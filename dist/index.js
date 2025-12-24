"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_1 = __importDefault(require("./core/app"));
var app = new app_1.default();
app.listen();
//# sourceMappingURL=index.js.map