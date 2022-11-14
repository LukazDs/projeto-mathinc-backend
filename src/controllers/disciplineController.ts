import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService.js";

export async function getDisciplines(_req: Request, res: Response) {
  const discipline: any = await disciplineService.getDisciplines();

  res.status(201).send(discipline);
}
