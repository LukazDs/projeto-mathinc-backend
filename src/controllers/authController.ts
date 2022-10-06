import { Users } from "@prisma/client";
import { Request, Response } from "express";
import * as authService from "../services/authService";
import { IUserCreationLogin, IUserCreationReg } from "../utils/userUtils";

export async function insertUser(req: Request, res: Response) {
  const user: IUserCreationReg = req.body;

  await authService.findUserByEmail(user.email, false);
  const userdb: Users = await authService.insertUser(user);

  res.status(201).send(userdb);
}

export async function getTokenWithUser(req: Request, res: Response) {
  const user: IUserCreationLogin = req.body;

  const userDb: Users[] = await authService.findUserByEmail(user.email);

  const token: string = await authService.getToken(userDb, user.password);

  const userDefault = await authService.createUser(userDb[0], token);

  res.status(201).send(userDefault);
}

export async function getUserById(req: Request, res: Response) {
  const userId: number = Number(req.params.id);

  const userDb = await authService.findUserById(userId);

  res.status(201).send(userDb);
}
