"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orders_controller_1 = require("./orders.controller");
var router = (0, express_1.Router)();
var ordersController = new orders_controller_1.OrdersController();
router.post('/', ordersController.createOrder);
router.get('/:id', ordersController.getOrder);
exports.default = router;
//# sourceMappingURL=orders.routes.js.map