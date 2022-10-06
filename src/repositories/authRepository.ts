import { Users } from "@prisma/client";
import { prisma } from "../config/database";
import { IUserCreationReg } from "../utils/userUtils";

export async function findUserByEmail(email: string) {
  const userDb: Users[] = await prisma.users.findMany({
    where: { email },
  });
  return userDb;
}

export async function findUserById(id: number) {
  const userDb: Users[] = await prisma.users.findMany({
    where: { id },
  });
  return userDb;
}

export async function insertUser(user: IUserCreationReg) {
  const userDb: Users = await prisma.users.create({ data: user });
  return userDb;
}
