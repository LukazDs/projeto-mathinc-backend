import { Router } from "express";
import * as postController from "../controllers/postController";

export const postRouter = Router();

postRouter.get("/posts", postController.getPosts);
