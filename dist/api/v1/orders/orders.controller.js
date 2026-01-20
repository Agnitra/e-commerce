"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
var OrdersController = /** @class */ (function () {
    function OrdersController() {
    }
    OrdersController.prototype.createOrder = function (req, res) {
        res.status(201).json({ message: 'Order created', orderId: 123 });
    };
    OrdersController.prototype.getOrder = function (req, res) {
        res.status(200).json({ message: 'Order details', orderId: req.params.id });
    };
    return OrdersController;
}());
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map