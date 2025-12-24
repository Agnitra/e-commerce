"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_routes_1 = __importDefault(require("./auth/auth.routes"));
var products_routes_1 = __importDefault(require("./products/products.routes"));
var cart_routes_1 = __importDefault(require("./cart/cart.routes"));
var orders_routes_1 = __importDefault(require("./orders/orders.routes"));
var coupons_routes_1 = __importDefault(require("./coupons/coupons.routes"));
var router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.use('/products', products_routes_1.default);
router.use('/cart', cart_routes_1.default);
router.use('/orders', orders_routes_1.default);
router.use('/coupons', coupons_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map