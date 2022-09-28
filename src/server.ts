import dotenv from "dotenv";
import app from "./app";
import chalk from "chalk";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
