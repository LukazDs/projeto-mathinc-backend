import { Posts } from "@prisma/client";

export type IPost = Omit<Posts, "id">;

export type IPostCreate = Omit<IPost, "userId">;
