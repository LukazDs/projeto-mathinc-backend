import joi from "joi";
import { IUserCreationReg, IUserCreationLogin } from "../utils/userUtils.js";

const userLoginSchema = joi.object<IUserCreationLogin>({
  email: joi.string().email().required().label("Informe um email válido!"),
  password: joi.string().min(8).required().label("Informe um password válido!"),
});

const userRegisterSchema = joi.object<IUserCreationReg>({
  name: joi.string().required().label("Informe um nome válido!"),
  email: joi.string().email().required().label("Informe um email válido!"),
  imageUrl: joi.string().uri().required().label("Informe uma url válida!"),
  password: joi.string().min(8).required().label("Informe um password válido!"),
  confirmedPassword: joi.ref("password"),
});

export { userRegisterSchema, userLoginSchema };
