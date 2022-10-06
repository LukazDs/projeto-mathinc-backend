import { prisma } from "../config/database";

export async function insertLike(userId: number, postId: number) {
  await prisma.likes.create({ data: { postId, userId } });
}
