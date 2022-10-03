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

export async function getToken(req: Request, res: Response) {
  const user: IUserCreationLogin = req.body;

  const userDb: Users[] = await authService.findUserByEmail(user.email);

  const token: string = await authService.getToken(userDb, user.password);

  const userDefault = {
    token,
    id: userDb[0].id,
    name: userDb[0].name,
    email: userDb[0].email,
  };

  res.status(201).send(userDefault);
}
