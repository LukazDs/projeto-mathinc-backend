import * as likeRepository from "../repositories/likeRepository";

export async function insertLike(userId: number, postId: number) {
  await likeRepository.insertLike(postId, userId);
}
