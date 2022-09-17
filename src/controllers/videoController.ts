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
    enum Resolutions {
        P144 = "P144", P240 = "P240", P360 = "P360", P480 = "P480", P720 = "P720", P1080 = "P1080", P1440 = "P1440", P2160 = "P2160"
    }

    let availableResolutions: Resolutions[] = req.body.availableResolutions

    const arrayResolutions  = Object.values(Resolutions)

    const result =  availableResolutions.every((element) => arrayResolutions.includes(element))

    const title = req.body.title

    const author = req.body.author

    const errors: {message: string, field: string}[] = []

    if (!result) {
        errors.push({message: 'availableResolutions is wrong', field: 'availableResolutions'})
    }
    if(!title || typeof title !== "string" || !title.trim() || title.length > 40) {
        errors.push({message: 'title is wrong', field: 'title'})
    }
    if(!author || typeof author !== "string" || !author.trim() || author.length > 20) {
        errors.push({message: 'author is wrong', field: 'author'})
    }
    if (errors.length) {
        return res.status(400).send({"errorsMessages": errors})
    }
    const newVideo = videoRepository.createVideo(req.body.title, req.body.author, availableResolutions)
    if (newVideo) {
        res.status(201).send(newVideo)
    }
})
videoControllers.put('/videos/:id', (req: Request, res: Response) => {

    const id = +req.params.id

    const video = videoRepository.findVideoById(+id)

    enum Resolutions {
        P144 = "P144", P240 = "P240", P360 = "P360", P480 = "P480", P720 = "P720", P1080 = "P1080", P1440 = "P1440", P2160 = "P2160"
    }

    let availableResolutions: Resolutions[] = req.body.availableResolutions

    const arrayResolutions  = Object.values(Resolutions)

    const result =  availableResolutions.every((element) => arrayResolutions.includes(element))

    const title = req.body.title

    const author = req.body.author

    const canBeDownloaded = req.body.canBeDownloaded

    const minAgeRestriction = req.body.minAgeRestriction

    const publicationDate = req.body.publicationDate

    const errors: {message: string, field: string}[] = []

    if (!video) {
        errors.push({message: 'id is wrong', field: 'id'})
        return  res.status(404).send({"errorsMessages": errors})
    }
    if(!title || typeof title !== "string" || !title.trim() || title.length > 40) {
        errors.push({message: 'title is wrong', field: 'title'})
    }
    if(!author || typeof author !== "string" || !author.trim() || author.length > 20) {
        errors.push({message: 'author is wrong', field: 'author'})
    }
    if (!result) {
        errors.push({message: 'availableResolutions is wrong', field: 'availableResolutions'})
    }
    if(typeof canBeDownloaded !== "boolean") {
        errors.push({message: 'canBeDownloaded is wrong', field: 'canBeDownloaded'})
    }
    if(typeof minAgeRestriction !== "number"  || minAgeRestriction < 1 || minAgeRestriction > 18) {
        errors.push({message: 'minAgeRestriction is wrong', field: 'minAgeRestriction'})
    }
    if(typeof publicationDate !== "string") {
        errors.push({message: 'publicationDate is wrong', field: 'publicationDate'})
    }
    if (errors.length) {
        return res.status(400).send({"errorsMessages": errors})
    }
    const updateVideo = videoRepository.updateVideo(+req.params.id, req.body.title, req.body.author, req.body.availableResolutions, req.body.canBeDownloaded, req.body.minAgeRestriction, req.body.publicationDate)
    if (updateVideo) {
        res.sendStatus(204)
    }
})
videoControllers.delete('/videos/:id', (req: Request, res: Response) => {
    console.log("id", req.params.id)
    const isDeleted = videoRepository.deleteVideo(+req.params.id)
    if (isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})
