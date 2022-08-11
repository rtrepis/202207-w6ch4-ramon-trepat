import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";

const debug = Debug("my-api:index");
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost/:${port}`));
});
