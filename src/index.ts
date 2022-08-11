import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import thingsRouter from "./routers/thinksRouter";

const debug = Debug("my-api:index");
const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/things", thingsRouter);

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost:${port}`));
});
