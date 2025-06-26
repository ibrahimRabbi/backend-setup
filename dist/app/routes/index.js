"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/users/user.route");
const product_route_1 = require("../modules/products/product.route");
exports.router = (0, express_1.Router)();
exports.router.use('/user', user_route_1.userRoutes);
exports.router.use('/product', product_route_1.productRoute);
