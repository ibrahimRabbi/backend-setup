import { Router } from "express";
import { getAllProductsController } from "./product.controller";

export const productRoute = Router()

productRoute.get('/getProducts', getAllProductsController)

