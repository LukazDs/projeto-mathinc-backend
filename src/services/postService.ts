import { Posts, Users } from "@prisma/client";
import { IPost, IPostCreate } from "../utils/postUtils.js";
import * as postRepository from "../repositories/postRepository.js";
import * as authRepository from "../repositories/authRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function getPosts() {
  const posts: Posts[] = await postRepository.getPosts();

  posts.reverse();

  return posts;
}

export async function insertPost(post: IPostCreate, id: number) {
  const users: Users[] = await authRepository.findUserById(id);

  console.log(users);

  if (!users.length) {
    throw notFoundError("Usuário não encontrado!");
  }
  const createDate = new Date();

  const postPayload: IPost = {
    ...post,
    createDate,
    userId: id,
  };

  await postRepository.insertPost(postPayload);
}
