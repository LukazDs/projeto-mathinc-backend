import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";
import * as userUtils from "../utils/userUtils";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";

export async function insertUser(user: userUtils.IUserCreationReg) {
  const password: string = await encryptPassword(user.password);
  await configurePasswords(user, password);

  return await authRepository.insertUser(user);
}

export async function findUserByEmail(email: string, login = true) {
  const userDb: Users[] = await authRepository.findUserByEmail(email);

  if (!login && userDb.length) {
    throw conflictError(
      "Email já está em uso, por favor cadastre-se com um outro email!"
    );
  }

  if (login && !userDb.length) {
    throw unauthorizedError("Email ou password inválidos!");
  }

  return userDb;
}

export async function getToken(userDb: Users[]) {
  const JWT_PASSWORD: string = String(process.env.JWT_KEY);

  const token: string = jwt.sign(userDb[0], JWT_PASSWORD);

  return token;
}

async function encryptPassword(password: string) {
  const digits = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}

async function configurePasswords(
  user: userUtils.IUserCreationReg,
  password: string
) {
  delete user.confirmedPassword;
  user.password = password;
}
