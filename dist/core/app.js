"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var prefix_1 = require("../utils/prefix");
var v1_1 = __importDefault(require("../api/v1"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.configure();
    }
    App.prototype.configure = function () {
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(prefix_1.prefix, v1_1.default);
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    };
    App.prototype.listen = function () {
        this.app.listen(process.env.PORT || 3000, function () {
            console.log("Server is running on port ".concat(process.env.PORT || 3000));
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map