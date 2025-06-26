import { Router } from "express";
import { createUserController, getUserController } from "./user.controller";
import { userModel } from "./user.model";


export const userRoutes = Router();

userRoutes.post("/register", createUserController)

userRoutes.get('/getUser',getUserController)