import { Posts } from "@prisma/client";
import { prisma } from "../config/database";

export async function getPosts() {
  const postDb: Posts[] = await prisma.posts.findMany();
  return postDb;
}
