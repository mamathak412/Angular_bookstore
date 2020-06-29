export class Video{
    videoId ?: string;
    videoName ?: string;
    link ?: string;
    categoryName ?: any

    constructor(videoId? : string, videoName? : string, link? : string, categoryName ?: any){
        this.videoId = videoId;
        this.videoName = videoName;
        this.link = link;
        this.categoryName = categoryName;
    }
}