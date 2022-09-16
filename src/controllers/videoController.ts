import {Request, Response, Router} from "express";
import {videoRepository} from "../repositories/videoRepository";

export const videoControllers = Router({})

videoControllers.get('/videos', (req: Request, res: Response) => {
    const addresses = videoRepository.findVideos()
    res.send(addresses)
})
videoControllers.get('/videos/:id', (req: Request, res: Response) => {
    const video = videoRepository.findVideoById(+req.params.id)
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }
})
videoControllers.post('/videos', (req: Request, res: Response) => {
    const title = req.body.title
    const author = req.body.author
    const availableResolutions = req.body.availableResolutions

    const errors: {meaasege: string, field: string}[] = []

    if(!title) {
        errors.push({field: 'title', meaasege: 'title is wrong'})
    }

    if (errors.length) {
        return res.status(400).send({erororsMessages: errors})
    }




    const newVideo = videoRepository.createVideo(req.body.title.toString(), req.body.author.toString(), req.body.availableResolutions)
    if (newVideo) {
        res.status(201).send(newVideo)
    } else {
        res.status(500).send(videoRepository.errorsVideos())
    }
})