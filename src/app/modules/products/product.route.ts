import { Router } from "express";
import { createProductController, getAllProductsController } from "./product.controller";

export const productRoute = Router()

productRoute.get('/getProducts', getAllProductsController)

productRoute.post("/create-product",createProductController)

