import Debug from "debug";
import chalk from "chalk";
import { Request, Response } from "express";
import things from "../data/things";

const debug = Debug("my-api:index");

const thingsGet = (req: Request, res: Response) => {
  debug(chalk.green("The good get return method"));
  res.status(200).json(things);
};

export default thingsGet;
