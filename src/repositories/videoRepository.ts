enum Resolutions {
    P144 = 'P144',
    P240 = 'P240',
    P480 = 'P480',
    P720 = 'P720',
    P1080 = 'P1080',
    P1440 = 'P1440',
    P2160 = 'P2160'
}
type VideDbType = {
    id: number
    title: string
    author: string
    canBeDownloaded: boolean,
    minAgeRestriction: number | null
    createdAt: string,
    publicationDate: string,
    availableResolutions: Resolutions[]
}
let videos: VideDbType[] = [
]

export const videoRepository = {
    findVideos() {return videos},
    findVideoById(id: number) {
        let video = videos.find(v => v.id === id);
        return video
    },
    createVideo(title: string, author: string, availableResolutions: Array<string>) {
        let newVideo: any = {
            id: +(new Date()),
            title: title,
            author: author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: (new Date()).toISOString(),
            publicationDate: new Date(Date.now() + (3600 * 1000 * 24)).toISOString(),
            availableResolutions: availableResolutions || []
        }
        videos.push(newVideo)
        return newVideo
    },
    updateVideo(id: number, title: string, author: string, availableResolutions: Resolutions[], canBeDownloaded: boolean, minAgeRestriction: number, publicationDate: string) {
        let video = videos.find(p => p.id === id);
        if (video) {
             video.title = title,
             video.author = author,
             video.canBeDownloaded = canBeDownloaded,
             video.minAgeRestriction = minAgeRestriction,
             video.availableResolutions = availableResolutions,
             video.publicationDate = publicationDate
            return true
        } else {
            return false
        }
    },
    deleteVideo(id: number) {
        for (let i = 0; i<videos.length; i++) {
            if (videos[i].id === id) {
                videos.splice(i,1)
                return true
            } else {
                return false
            }
        }
    }
}
