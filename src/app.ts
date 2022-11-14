import express from "express";
import cors from "cors";
import "express-async-errors";
import { authRouter } from "./routes/authRouter.js";
import { postRouter } from "./routes/postRouter.js";
import { likeRouter } from "./routes/likeRouter.js";
import errorHandler from "./middlewares/errorHandle.js";
import { disciplineRouter } from "./routes/disciplineRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(postRouter);
app.use(likeRouter);
app.use(disciplineRouter);
app.use(errorHandler);

export default app;
