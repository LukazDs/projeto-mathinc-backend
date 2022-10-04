import { Router } from "express";
import * as postController from "../controllers/postController";
import validateToken from "../middlewares/validateToken";

export const postRouter = Router();

postRouter.get("/posts", postController.getPosts);
postRouter.post("/posts", validateToken, postController.insertPost);
