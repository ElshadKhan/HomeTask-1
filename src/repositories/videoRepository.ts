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
const resolutions = [ "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" ]
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
    createVideo(title: string, author: string, availableResolutions?: any) {
        const array: any = []
        const validation = availableResolutions.map((a: string) => {
            resolutions.map((b) => {if(a === b) {
                array.push(a)
                return
            } })
        })
        function unique(arr: any) {
            let result: any = [];
            for (let str of arr) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            }
            return result;
        }
        function compare() {
            let c = true
            for(let i = 0; i < availableResolutions.length; i++) {// Цикл по всем эле­мен­там
                if ((unique(array)[i]) !== availableResolutions[i]) {
                    c = false;
                } else {
                    c = true;
                }
            }
            return c
        }
        if (compare() !== false) {
            var newVideo: any = {
                id: +(new Date()),
                title: title,
                author: author,
                canBeDownloaded: false,
                minAgeRestriction: null,
                createdAt: (new Date())?.toISOString(),
                publicationDate: new Date(Date.now() + (3600 * 1000 * 24))?.toISOString(),
                availableResolutions: availableResolutions
            }
            videos.push(newVideo)
            return newVideo
        } else {
             newVideo = false;
        }


        return newVideo
    },
    errorsVideos(){
        const errors = {
            "errorsMessages": [
                {
                    "message": "Message with error explanation for certain field",
                    "field": "availableResolutions"
                }
            ]
        }
        return errors
    }
}
