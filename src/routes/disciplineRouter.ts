import { Router } from "express";
import { getDisciplines } from "../controllers/disciplineController.js";

export const disciplineRouter = Router();

disciplineRouter.get("/disciplines", getDisciplines);
