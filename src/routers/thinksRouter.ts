import express from "express";
import { thingsGet, thingsGetId } from "../controllers/thingsController";

const thingsRouter = express.Router();

thingsRouter.get("/", thingsGet);

thingsRouter.get("/:idThing", thingsGetId);

export default thingsRouter;
