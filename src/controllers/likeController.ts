import { Request, Response } from "express";
import * as likeService from "../services/likeService";

export async function insertLike(req: Request, res: Response) {
  const { userId, postId } = req.query;

  await likeService.findLike(Number(userId), Number(postId), false);

  await likeService.insertLike(Number(userId), Number(postId));

  res.status(201).send("Usuário deu like.");
}

export async function removeLike(req: Request, res: Response) {
  const { userId, postId } = req.query;

  await likeService.findLike(Number(userId), Number(postId), true);

  await likeService.removeLike(Number(userId), Number(postId));

  res.status(201).send("Like do usuário não encontrado.");
}
