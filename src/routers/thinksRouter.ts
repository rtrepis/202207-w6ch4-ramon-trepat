import express from "express";
import thingsGet from "../controllers/thingsController";

const thingsRouter = express.Router();

thingsRouter.get("/", thingsGet);

export default thingsRouter;
