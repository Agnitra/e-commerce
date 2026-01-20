"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("./auth.controller");
var router = (0, express_1.Router)();
var authController = new auth_controller_1.AuthController();
router.post('/login', authController.login);
router.post('/register', authController.register);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map