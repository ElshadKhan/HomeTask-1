const videos = [{
    id: 1,
    title: "string1",
    author: "author1",
    canBeDownloaded: new Date(),
    minAgeRestriction: null,
    createdAt: (new Date())?.toISOString(),
    publicationDate: new Date(Date.now() + (3600 * 1000 * 24))?.toISOString(),
    availableResolutions: [
        "P144"
    ]
},{
    id: 2,
    title: "string2",
    author: "author2",
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: "2022-09-15T14:37:24.782Z",
    publicationDate: "2022-09-15T14:37:24.782Z",
    availableResolutions: [
        "P144"
    ]
},{
    id: 3,
    title: "string3",
    author: "author3",
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: "2022-10-15T14:37:24.782Z",
    publicationDate: "2022-10-15T14:37:24.782Z",
    availableResolutions: [
        "P144"
    ]
}]








// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// }
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
