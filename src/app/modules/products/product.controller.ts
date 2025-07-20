import { NextFunction, Request, Response } from "express";
import { productModel } from "./product.model";

export const getAllProductsController = async (req: Request, res: Response, next: NextFunction) => {
   const pageNumber: number = Number(req?.query?.page)
   const limitValue: number = Number(req.query?.limit)
   const skipValue = (pageNumber - 1) * limitValue

   try {
      const totalData = await productModel.find({})
      const finding = await productModel.find({}).select('').skip(skipValue).limit(limitValue)
  
      res.status(200).json({
         message: "All products fetched successfully",
         response: { totalData: totalData.length, data:finding  }
      });
    } catch (error) {
       next(error);
    }
}


export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const creating = await productModel.create(req.body)
      res.status(200).json({ message: "product create successfully", data: creating });
   } catch (error) {
      next(error);
   }
}