import { Likes } from "@prisma/client";
import { prisma } from "../config/database";

export async function insertLike(userId: number, postId: number) {
  await prisma.likes.create({ data: { postId, userId } });
}

export async function findLike(userId: number, postId: number) {
  const like: Likes[] = await prisma.likes.findMany({
    where: { userId, postId },
  });

  return like;
}
