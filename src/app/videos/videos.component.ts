import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  private videos : Video[] = [];

  selectedVideo : Video;

  video : Video;

  searchText: string;

  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  constructor(private http: HttpClient, private videoService: VideoService) { }

  ngOnInit() {
    this.getVideos();
}

onSelect(video : Video): void{
  console.log(video);
  this.selectedVideo = video;
}

getVideos() : void {
  console.log("Inside component "+ this.videos);
  this.videoService
  .getVideos()
  .subscribe((data:any) => {
    console.log(data);
    this.videos = data;
  });
}

deleteVideo(video : Video): void{
  console.log("Inside component "+ video);
  this.videoService.deleteVideo(video.videoName).subscribe();
}

searchVideo() : void{
  console.log("Inside component "+ this.videos);
  this.videoService
  .searchVideoByName(this.searchText)
  .subscribe((data:any) => {
    console.log(data);
    this.video = data;
  });
}
}

