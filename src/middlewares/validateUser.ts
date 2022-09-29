import { Request, Response, NextFunction } from "express";
import { userRegisterSchema } from "../schemas/userSchema";

export async function validateRegisterBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validation = userRegisterSchema.validate(req.body);

  if (validation.error) {
    return res.status(422).send(validation.error.details[0].context?.label);
  }

  next();
}
