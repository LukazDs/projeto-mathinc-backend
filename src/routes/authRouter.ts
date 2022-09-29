import { Router } from "express";
import * as authController from "../controllers/authController";

export const authRouter = Router();

authRouter.post("/user/register", authController.insertUser);
