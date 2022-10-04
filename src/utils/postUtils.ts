import { Posts } from "@prisma/client";

export type IPost = Omit<Posts, "id">;
