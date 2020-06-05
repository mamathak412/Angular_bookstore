import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../message.service';

import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SigninService {

   private signinUrl = 'http://localhost:9002/user/signin';  

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  signin(user : User) : Observable<User>{
       console.log("after add service");
     return this.httpClient.post<User>(this.signinUrl, user, httpOptions);
  }
}
