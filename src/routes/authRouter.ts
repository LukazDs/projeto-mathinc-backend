import { Router } from "express";
import * as authController from "../controllers/authController";
import * as validateUser from "../middlewares/validateUser";

export const authRouter = Router();

authRouter.get("/user/:id", authController.getUserById);

authRouter.post(
  "/user/register",
  validateUser.validateRegisterBody,
  authController.insertUser
);

authRouter.post(
  "/user/login",
  validateUser.validateLoginBody,
  authController.getTokenWithUser
);
