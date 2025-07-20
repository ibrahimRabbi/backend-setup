"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
exports.productRoute = (0, express_1.Router)();
exports.productRoute.get('/getProducts', product_controller_1.getAllProductsController);
exports.productRoute.post("/create-product", product_controller_1.createProductController);
