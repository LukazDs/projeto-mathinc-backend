import { Request, Response } from "express";
import * as likeService from "../services/likeService";

export async function insertLike(req: Request, res: Response) {
  const { userId, postId } = req.query;

  await likeService.findLike(Number(userId), Number(postId));

  await likeService.insertLike(Number(userId), Number(postId));

  res.status(201).send("Usuário deu like.");
}
