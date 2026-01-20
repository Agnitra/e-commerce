"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_controller_1 = require("./products.controller");
var router = (0, express_1.Router)();
var productsController = new products_controller_1.ProductsController();
router.get('/', productsController.getAll);
router.get('/:id', productsController.getOne);
exports.default = router;
//# sourceMappingURL=products.routes.js.map