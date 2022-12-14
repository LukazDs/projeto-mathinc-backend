import { Likes } from "@prisma/client";
import * as likeRepository from "../repositories/likeRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

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

export async function findLikeByUserId(userId: number) {
  const likes: Likes[] = await likeRepository.findLikeByUserId(userId);
  return likes;
}

export async function findAmountLikePostId(postId: number) {
  const likes: Likes[] = await likeRepository.findLikeByPostId(postId);
  return likes.length;
}
