import Debug from "debug";
import chalk from "chalk";
import { Request, Response } from "express";
import things from "../data/things";

const debug = Debug("my-api:index");

export const thingsGet = (req: Request, res: Response) => {
  debug(chalk.green("The good get return method"));
  res.status(200).json(things);
};

export const thingsGetId = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const getId = things.filter((item) => item.id === idThing);

  if (getId.length === 0) {
    debug(chalk.blue(`Controller thingsGetID: ${idThing} not found`));
    res.status(404).json({ error: "Id not found" });
    return;
  }

  if (getId.length > 1) {
    debug(chalk.red(`Controller thingsGetID: ${idThing} repeated`));
    res.status(500).json({ error: "Is 'littel' problem in the server" });
    return;
  }

  debug(chalk.green(`Controller thingsGetID: ${idThing} return `));
  res.status(200).json(getId);
};

export default thingsGet;
