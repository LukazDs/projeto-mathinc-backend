import { Posts } from "@prisma/client";
import { Request, Response } from "express";
import * as postService from "../services/postService";

export async function getPosts(req: Request, res: Response) {
  const posts: Posts[] = await postService.getPosts();

  res.status(200).send(posts);
}
