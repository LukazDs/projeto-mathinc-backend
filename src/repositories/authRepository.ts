import { prisma } from "../config/database";
import { IUserCreationReg } from "../utils/userUtils";

export async function insertUser(user: IUserCreationReg) {
  return await prisma.users.create({ data: user });
}
