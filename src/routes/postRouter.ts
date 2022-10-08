import { Router } from "express";
import * as postController from "../controllers/postController";
import { validatePostBody } from "../middlewares/validatePost";
import validateToken from "../middlewares/validateToken";

export const postRouter = Router();

postRouter.get("/posts", validateToken, postController.getPosts);

postRouter.post(
  "/posts",
  validateToken,
  validatePostBody,
  postController.insertPost
);
