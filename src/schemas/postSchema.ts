import joi from "joi";
import { IPost } from "../utils/postUtils.js";

const postSchema = joi.object<IPost>({
  title: joi.string().required().label("Informe um titulo válido!"),
  imageUrl: joi.string().uri().required().label("Informe uma Url válida!"),
  userId: joi
    .number()
    .required()
    .label("Informe o id do usuário que está fazendo o post!"),
});

export { postSchema };
