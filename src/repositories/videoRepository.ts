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
        var newVideo: any = {
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
}
