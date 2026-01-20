"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
var CartController = /** @class */ (function () {
    function CartController() {
    }
    CartController.prototype.getCart = function (req, res) {
        res.status(200).json({ message: 'Cart details', items: [] });
    };
    CartController.prototype.addToCart = function (req, res) {
        res.status(200).json({ message: 'Item added to cart' });
    };
    return CartController;
}());
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map