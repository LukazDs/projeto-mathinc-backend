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
    throw notFoundError("Email ou password inválidos!");
  }

  return userDb;
}

export async function getToken(userDb: Users[], password: string) {
  const JWT_PASSWORD: string = String(process.env.JWT_KEY);
  const TIME: string = String(process.env.JWT_TIME);

  await comparePassword(password, userDb[0].password);

  const token: string = jwt.sign(userDb[0], JWT_PASSWORD, { expiresIn: TIME });

  return token;
}

export async function createUser(user: Users, token: string) {
  const userDefault: userUtils.IUserToken = {
    token,
    id: user.id,
    name: user.name,
    email: user.email,
    imageUrl: user.imageUrl,
  };

  return userDefault;
}

async function comparePassword(password: string, passwordDb: string) {
  const passwordValidation: boolean = bcrypt.compareSync(password, passwordDb);

  if (!passwordValidation) {
    throw unauthorizedError("Email ou password incorretos!");
  }
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
