import { Likes } from "@prisma/client";
import * as likeRepository from "../repositories/likeRepository";
import { conflictError } from "../utils/errorUtils";

export async function insertLike(userId: number, postId: number) {
  await likeRepository.insertLike(userId, postId);
}

export async function findLike(userId: number, postId: number) {
  const like: Likes[] = await likeRepository.findLike(userId, postId);

  if (like.length) {
    throw conflictError("Usuário já deu like!");
  }

  return like;
}
