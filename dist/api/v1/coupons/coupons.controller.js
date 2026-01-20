"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsController = void 0;
var CouponsController = /** @class */ (function () {
    function CouponsController() {
    }
    CouponsController.prototype.applyCoupon = function (req, res) {
        res.status(200).json({ message: 'Coupon applied', discount: 10 });
    };
    CouponsController.prototype.listCoupons = function (req, res) {
        res.status(200).json({ message: 'List of coupons', coupons: [] });
    };
    return CouponsController;
}());
exports.CouponsController = CouponsController;
//# sourceMappingURL=coupons.controller.js.map