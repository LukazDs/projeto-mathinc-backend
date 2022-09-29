import { Users } from "@prisma/client";
import { prisma } from "../config/database";
import { IUserCreationReg } from "../utils/userUtils";

export async function findUserByEmail(email: string) {
  const userDb: Users | null = await prisma.users.findUnique({
    where: { email },
  });
  return userDb;
}

export async function insertUser(user: IUserCreationReg) {
  const userDb: Users = await prisma.users.create({ data: user });
  return userDb;
}
