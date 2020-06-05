import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService) { }

  users : User[];

  private user = new User();

  ngOnInit() {
  }

  addUser() : void{
    this.user.userId = "1";
    console.log("Inside add flower");
    this.userService.add(this.user).subscribe(user => this.users.push(user));
  }
  

 
}
