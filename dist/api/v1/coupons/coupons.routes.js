"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var coupons_controller_1 = require("./coupons.controller");
var router = (0, express_1.Router)();
var couponsController = new coupons_controller_1.CouponsController();
router.get('/', couponsController.listCoupons);
router.post('/apply', couponsController.applyCoupon);
exports.default = router;
//# sourceMappingURL=coupons.routes.js.map