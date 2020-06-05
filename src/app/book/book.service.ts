import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

   private bookListUrl = 'http://localhost:9002/books';  

   private devopbooktUrl = 'http://localhost:9002/books/Devops'; 
   
   private jenkinsbooktUrl = 'http://localhost:9002/books/Jenkins'; 

   private awsbookUrl = 'http://localhost:9002/books/Aws'; 

   private flowers : Book[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  /** GET heroes from the server */
getBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>(this.bookListUrl)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/** GET heroes from the server */
getDevopsBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>(this.devopbooktUrl)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/** GET heroes from the server */
getAwsBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>(this.awsbookUrl)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/** GET heroes from the server */
getJenkinsBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>(this.jenkinsbooktUrl)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`FlowerService: ${message}`);
}

}


