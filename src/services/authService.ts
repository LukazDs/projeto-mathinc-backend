import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository";
import { conflictError } from "../utils/errorUtils";
import { IUserCreationLogin, IUserCreationReg } from "../utils/userUtils";
import jwt from "jsonwebtoken";

export async function insertUser(user: IUserCreationReg) {
  const userDb = await authRepository.findUserByEmail(user.email);

  if (userDb) {
    throw conflictError(
      "Email já está em uso, por favor cadastre-se com um outro email!"
    );
  }

  const password: string = await encryptPassword(user.password);
  await configurePasswords(user, password);

  return await authRepository.insertUser(user);
}

export async function getToken(user: IUserCreationReg) {
  const JWT_PASSWORD: string = String(process.env.JWT_KEY);

  const token: string = jwt.sign(user, JWT_PASSWORD);

  return token;
}

async function encryptPassword(password: string) {
  const digits = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}

async function configurePasswords(user: IUserCreationReg, password: string) {
  delete user.confirmedPassword;
  user.password = password;
}
