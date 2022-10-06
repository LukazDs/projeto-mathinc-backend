import { Router } from "express";
import * as likeController from "../controllers/likeController";

export const likeRouter = Router();

likeRouter.post("/like", likeController.insertLike);
likeRouter.delete("/like", likeController.removeLike);
