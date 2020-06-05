import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];

  constructor() { }

  add(message : string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
