import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  private video = new Video();

  private videos : Video[] = [];


  showMsg: boolean = false;

  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
  }

  addVideo() : void{
    console.log("Inside add book");
    this.videoService.addVideo(this.video)
      .subscribe(video => { 
        this.videos.push(video);
        this.showMsg= true;
      });
  }

  deleteVideo(video: Video) : void{
    console.log("Inside delete book");
    this.videoService.deleteVideo(this.video.videoName)
      .subscribe();
      this.showMsg= true;
  }

}
