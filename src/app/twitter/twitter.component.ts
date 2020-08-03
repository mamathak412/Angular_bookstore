import { Component, OnInit } from '@angular/core';
import { Twitter } from './twitter';
import { TwitterService } from './twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  twitters : Twitter[];

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.getTwitters();
  }

  getTwitters() : void {
  console.log("Inside component "+ this.twitters);
  this.twitterService
  .getTwitters()
  .subscribe((data:any) => {
    console.log(data);
    this.twitters = data;
  });
}
}
