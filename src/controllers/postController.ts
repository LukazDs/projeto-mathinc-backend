import { Posts } from "@prisma/client";
import { Request, Response } from "express";
import * as postService from "../services/postService";
import { IPost } from "../utils/postUtils";

export async function getPosts(_req: Request, res: Response) {
  const posts: Posts[] = await postService.getPosts();

  res.status(200).send(posts);
}

export async function insertPost(req: Request, res: Response) {
  const post: IPost = req.body;

  await postService.insertPost(post);

  res.status(201).send("Post Created");
}
