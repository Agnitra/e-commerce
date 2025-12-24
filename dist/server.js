"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
var v1_1 = __importDefault(require("./api/v1"));
var app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('dev'));
// Routes
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/api/v1', v1_1.default);
// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
exports.default = app;
//# sourceMappingURL=server.js.map