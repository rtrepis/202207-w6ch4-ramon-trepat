import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import things from "./data/things";

const debug = Debug("my-api:index");
const app = express();

const port = process.env.PORT;

app.use(express.json());

app.get("/things", (req, res) => {
  res.status(200).json(things);
});

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost:${port}`));
});
