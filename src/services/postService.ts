import { Posts } from "@prisma/client";
import { IPost, IPostCreate } from "../utils/postUtils";
import * as postRepository from "../repositories/postRepository";

export async function getPosts() {
  const posts: Posts[] = await postRepository.getPosts();

  return posts;
}

export async function insertPost(post: IPostCreate, id: number) {
  const postPayload: IPost = {
    ...post,
    userId: id,
  };

  await postRepository.insertPost(postPayload);
}
