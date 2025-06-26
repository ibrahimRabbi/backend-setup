"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("/register", user_controller_1.createUserController);
exports.userRoutes.get('/getUser', user_controller_1.getUserController);
