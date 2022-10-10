import { Posts } from "@prisma/client";
import { prisma } from "../config/database.js";
import { IPost } from "../utils/postUtils.js";

export async function getPosts() {
  const postDb: Posts[] = await prisma.posts.findMany();
  return postDb;
}

export async function insertPost(post: IPost) {
  await prisma.posts.create({ data: post });
}
