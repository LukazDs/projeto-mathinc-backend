import { Likes } from "@prisma/client";
import * as likeRepository from "../repositories/likeRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";

export async function insertLike(userId: number, postId: number) {
  await likeRepository.insertLike(userId, postId);
}

export async function findLike(userId: number, postId: number, liked: boolean) {
  const like: Likes[] = await likeRepository.findLike(userId, postId);

  if (!liked && like.length) {
    throw conflictError("Usuário já deu like!");
  }

  if (liked && !like.length) {
    throw notFoundError("Like do usuário não encontrado!");
  }

  return like;
}

export async function removeLike(userId: number, postId: number) {
  await likeRepository.removeLike(userId, postId);
}
