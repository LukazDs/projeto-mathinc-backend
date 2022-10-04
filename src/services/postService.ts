import { Posts } from "@prisma/client";
import * as postRepository from "../repositories/postRepository";

export async function getPosts() {
  const posts: Posts[] = await postRepository.getPosts();

  return posts;
}
