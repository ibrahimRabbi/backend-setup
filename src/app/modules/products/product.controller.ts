import { NextFunction, Request, Response } from "express";

export const getAllProductsController = async (req:Request, res:Response,next:NextFunction) => {
    try {
       res.status(200).json({message: "All products fetched successfully",});
    } catch (error) {
       next(error);
    }
}