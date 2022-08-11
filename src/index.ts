import "./loadEnvironment";
import Debug from "debug";
import express from "express";

const debug = Debug("mi-api:index");
const app = express();

app.listen(4000, () => {});

debug("assdafdf");
