import { Request, Response, NextFunction } from "express";
import { postSchema } from "../schemas/postSchema.js";

export async function validatePostBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validation = postSchema.validate(req.body);

  if (validation.error) {
    return res.status(422).send(validation.error.details[0].context?.label);
  }

  next();
}
