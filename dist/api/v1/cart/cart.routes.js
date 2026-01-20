"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cart_controller_1 = require("./cart.controller");
var router = (0, express_1.Router)();
var cartController = new cart_controller_1.CartController();
router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
exports.default = router;
//# sourceMappingURL=cart.routes.js.map