import { Posts } from "@prisma/client";
import { Request, Response } from "express";
import * as postService from "../services/postService";
import { IPostCreate } from "../utils/postUtils";

export async function getPosts(_req: Request, res: Response) {
  const posts: Posts[] = await postService.getPosts();

  res.status(200).send(posts);
}

export async function insertPost(req: Request, res: Response) {
  const post: IPostCreate = req.body;

  const { verified } = res.locals;

  await postService.insertPost(post, verified.id);

  res.status(201).send("Post Created");
}
