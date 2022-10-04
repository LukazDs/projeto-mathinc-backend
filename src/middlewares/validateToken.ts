import { Request, Response, NextFunction } from "express";
import jwt from "../token/jwt";
import { unauthorizedError } from "../utils/errorUtils";

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token: string = String(authorization?.replace("Bearer ", ""));

  const verified = jwt.verifyToken(token);

  if (!verified) {
    throw unauthorizedError("Token inválido!");
  }

  res.locals.verified = verified;

  next();
}

export default validateToken;
