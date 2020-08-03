export class Video{
    videoId ?: string;
    videoName ?: string;
    link ?: string;
    categoryName ?: any;
    count ?: number

    constructor(videoId? : string, videoName? : string, link? : string, categoryName ?: any, count ?: number){
        this.videoId = videoId;
        this.videoName = videoName;
        this.link = link;
        this.categoryName = categoryName;
        this.count = count;
    }
}