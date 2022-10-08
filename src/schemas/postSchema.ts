import joi from "joi";
import { IPost } from "../utils/postUtils";

const postSchema = joi.object<IPost>({
  title: joi.string().required().label("Informe um titulo válido!"),
  imageUrl: joi.string().uri().required().label("Informe uma Url válida!"),
  userId: joi.number().required(),
});

export { postSchema };
