const videos = [{
    id: 1,
    title: "string1",
    author: "author1",
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: "2022-08-15T14:37:24.782Z",
    publicationDate: "2022-08-15T14:37:24.782Z",
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

export const videoRepository = {
    findVideos() {return videos},
    findVideoById(id: number) {
        let video = videos.find(v => v.id === id);
        return video
    }
}
