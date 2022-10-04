import { Posts } from "@prisma/client";
import { IPost } from "../utils/postUtils";
import * as postRepository from "../repositories/postRepository";

export async function getPosts() {
  const posts: Posts[] = await postRepository.getPosts();

  return posts;
}

export async function insertPost(post: IPost) {
  await postRepository.insertPost(post);
}
