import {Request, Response, Router} from "express";
import {videoControllers} from "../controllers/videoController";

export const videoRouter = Router({})

videoRouter.use('/get', videoControllers)
