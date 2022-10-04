import { Posts } from "@prisma/client";
import { prisma } from "../config/database";
import { IPost } from "../utils/postUtils";

export async function getPosts() {
  const postDb: Posts[] = await prisma.posts.findMany();
  return postDb;
}

export async function insertPost(post: IPost) {
  await prisma.posts.create({ data: post });
}
