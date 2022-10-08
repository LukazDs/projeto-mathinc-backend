import { Posts } from "@prisma/client";
import { IPost, IPostCreate } from "../utils/postUtils";
import * as postRepository from "../repositories/postRepository";
import dayjs from "dayjs";

export async function getPosts() {
  const posts: Posts[] = await postRepository.getPosts();

  return posts;
}

export async function insertPost(post: IPostCreate, id: number) {
  const createDate = new Date();

  const postPayload: IPost = {
    ...post,
    createDate,
    userId: id,
  };

  await postRepository.insertPost(postPayload);
}
