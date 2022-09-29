import { Users } from "@prisma/client";
import { Request, Response } from "express";
import * as authService from "../services/authService";
import { IUserCreationReg } from "../utils/userUtils";

export async function insertUser(req: Request, res: Response) {
  const user: IUserCreationReg = req.body;
  const userdb: Users = await authService.insertUser(user);

  res.status(200).send(userdb);
}