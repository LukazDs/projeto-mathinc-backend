import express from "express";
import cors from "cors";
import "express-async-errors";
import { authRouter } from "./routes/authRouter";
import errorHandler from "./middlewares/errorHandle";

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(errorHandler);

export default app;
