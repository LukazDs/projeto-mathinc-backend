import { Router } from "express";
import * as postController from "../controllers/postController.js";
import { validatePostBody } from "../middlewares/validatePost.js";
import validateToken from "../middlewares/validateToken.js";

export const postRouter = Router();

postRouter.get("/posts", validateToken, postController.getPosts);

postRouter.post(
  "/posts",
  validateToken,
  validatePostBody,
  postController.insertPost
);
