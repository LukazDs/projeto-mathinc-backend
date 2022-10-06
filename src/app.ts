import express from "express";
import cors from "cors";
import "express-async-errors";
import { authRouter } from "./routes/authRouter";
import { postRouter } from "./routes/postRouter";
import { likeRouter } from "./routes/likeRouter";
import errorHandler from "./middlewares/errorHandle";

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(postRouter);
app.use(likeRouter);
app.use(errorHandler);

export default app;
