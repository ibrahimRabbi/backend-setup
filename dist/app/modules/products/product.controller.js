"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = exports.getAllProductsController = void 0;
const product_model_1 = require("./product.model");
const getAllProductsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const pageNumber = Number((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.page);
    const limitValue = Number((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit);
    const skipValue = (pageNumber - 1) * limitValue;
    try {
        const totalData = yield product_model_1.productModel.find({});
        const finding = yield product_model_1.productModel.find({}).select('').skip(skipValue).limit(limitValue);
        res.status(200).json({
            message: "All products fetched successfully",
            response: { totalData: totalData.length, data: finding }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProductsController = getAllProductsController;
const createProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const creating = yield product_model_1.productModel.create(req.body);
        res.status(200).json({ message: "product create successfully", data: creating });
    }
    catch (error) {
        next(error);
    }
});
exports.createProductController = createProductController;
