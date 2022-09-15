import {Request, Response, Router} from "express";
import {videoRepository} from "../repositories/videoRepository";

export const videoControllers = Router({})

videoControllers.get('/video', (req: Request, res: Response) => {
    const addresses = videoRepository.findVideos()
    res.send(addresses)
})
videoControllers.get('/video/:id', (req: Request, res: Response) => {
    const video = videoRepository.findVideoById(+req.params.id)
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }
})