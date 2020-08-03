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

   private bookUrl = 'http://localhost:9001/books';  

   private books : Book[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  /** GET heroes from the server */
getBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>(this.bookUrl)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/** GET heroes from the server */
getBooksByCategory(category: String): Observable<Book[]> {
  const url = `${this.bookUrl}/${category}`; 
  return this.httpClient.get<Book[]>(url)
  .pipe(
    catchError(this.handleError<Book[]>('getBooks', []))
  );
}

/** Add devops book */
addBook(book : Book): Observable<Book> {
  const body=JSON.stringify(book);
    console.log(body)
  console.log("Before add service" + book);
 return this.httpClient.post<Book>(this.bookUrl, body, httpOptions);
}

/** DELETE: delete the hero from the server */
deleteBook (bookName: String): Observable<{}> {
  console.log("Delete book by name " + bookName)
  const url = `${this.bookUrl}/${bookName}`; 
  return this.httpClient.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('book'))
    );
}

searchBookByBookName(bookName : string): Observable<{}>{
  const url = `${this.bookUrl}/search/${bookName}`; 
  return this.httpClient.get<Book[]>(url)
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


