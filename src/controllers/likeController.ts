import { Likes } from "@prisma/client";
import { Request, Response } from "express";
import * as likeService from "../services/likeService.js";

export async function insertLike(req: Request, res: Response) {
  const { userId, postId } = req.query;

  await likeService.findLike(Number(userId), Number(postId), false);

  await likeService.insertLike(Number(userId), Number(postId));

  res.status(201).send("Usuário deu like.");
}

export async function getLikeByUserId(req: Request, res: Response) {
  const { id } = req.params;

  const likes: Likes[] = await likeService.findLikeByUserId(Number(id));

  res.status(200).send(likes);
}

export async function getAmountLikeByPostId(req: Request, res: Response) {
  const { id } = req.params;

  const amountLikes: number = await likeService.findAmountLikePostId(
    Number(id)
  );

  res.status(200).send({ amount: amountLikes });
}

export async function removeLike(req: Request, res: Response) {
  const { userId, postId } = req.query;

  await likeService.findLike(Number(userId), Number(postId), true);

  await likeService.removeLike(Number(userId), Number(postId));

  res.status(201).send("Usuário deu deslike.");
}
