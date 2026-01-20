"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.getAll = function (req, res) {
        res.status(200).json({ message: 'List of products', products: [] });
    };
    ProductsController.prototype.getOne = function (req, res) {
        res.status(200).json({ message: 'Product details', productId: req.params.id });
    };
    return ProductsController;
}());
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map