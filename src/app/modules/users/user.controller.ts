import { NextFunction, Request, RequestHandler, Response } from "express";
import { userModel } from "./user.model";
import catchAsync from "../../utils/catchAsync";

export const createUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    
        const createUser = await userModel.create(req.body);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: createUser
        });
})


export const getUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const finding = await userModel.find();
    res.status(200).json({
        success: true,
        message: "User retrive successfully",
        data: finding
    })

})