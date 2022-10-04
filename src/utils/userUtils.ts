import { Users } from "@prisma/client";

export type IUser = Omit<Users, "id">;

export interface IUserCreationReg extends IUser {
  confirmedPassword?: string;
}

export type IUserCreationLogin = Omit<
  IUser,
  keyof { name: string; imageUrl: string }
>;

export type IUserNoPassword = Omit<Users, "password">;

export interface IUserToken extends IUserNoPassword {
  token: string;
}
