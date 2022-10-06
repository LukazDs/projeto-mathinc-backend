import { Router } from "express";
import * as likeController from "../controllers/likeController";
import validateToken from "../middlewares/validateToken";

export const likeRouter = Router();

likeRouter.post("/like", validateToken, likeController.insertLike);
likeRouter.get(
  "/likes/user/:id",
  validateToken,
  likeController.getLikeByUserId
);
likeRouter.delete("/like", validateToken, likeController.removeLike);
