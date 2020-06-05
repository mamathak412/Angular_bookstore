import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private signUpUrl = 'http://localhost:9002/user/signup';  

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  add(user : User) : Observable<User>{
    console.log("Calling sign up service");
     return this.httpClient.post<User>(this.signUpUrl, user, httpOptions);
  }

}


