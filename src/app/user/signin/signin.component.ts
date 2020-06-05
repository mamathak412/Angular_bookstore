import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { SigninService } from './signin.service';

import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private signinService : SigninService) { }

  private user = new User();

  ngOnInit() {
  }

  signin() : void{
    console.log("Inside sign in user");
    this.signinService.signin(this.user);
  }
  
}
