import * as authRepository from "../repositories/authRepository";
import { IUserCreationReg } from "../utils/userUtils";

export async function insertUser(user: IUserCreationReg) {
  delete user.confirmedPassword;
  return await authRepository.insertUser(user);
}
