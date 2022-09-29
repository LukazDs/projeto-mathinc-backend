import * as authRepository from "../repositories/authRepository";
import { conflictError } from "../utils/errorUtils";
import { IUserCreationReg } from "../utils/userUtils";

export async function insertUser(user: IUserCreationReg) {
  const userDb = await authRepository.findUserByEmail(user.email);

  if (userDb) {
    throw conflictError(
      "Email já está em uso, por favor cadastre-se com um outro email!"
    );
  }

  delete user.confirmedPassword;
  return await authRepository.insertUser(user);
}
