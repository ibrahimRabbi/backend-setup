import { Router } from "express";
import { userRoutes } from "../modules/users/user.route";
import { productRoute } from "../modules/products/product.route";

export const router = Router()


router.use('/user', userRoutes)
router.use('/product', productRoute)