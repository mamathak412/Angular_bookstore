import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Queries } from './queries';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

   private queriesUrl = 'http://localhost:9001/queries';  

   private queries : Queries[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  /** GET heroes from the server */
getQueries(): Observable<Queries[]> {
  return this.httpClient.get<Queries[]>(this.queriesUrl)
  .pipe(
    catchError(this.handleError<Queries[]>('getQueries', []))
  );
}

/** GET heroes from the server */
getQueriesByCategory(category: String): Observable<Queries[]> {
  const url = `${this.queriesUrl}/${category}`; 
  return this.httpClient.get<Queries[]>(url)
  .pipe(
    catchError(this.handleError<Queries[]>('getQueries', []))
  );
}

/** Add devops book */
addQueries(query : Queries): Observable<Queries> {
  const body=JSON.stringify(query);
    console.log(body)
  console.log("Before add service" + query);
 return this.httpClient.post<Queries>(this.queriesUrl, body, httpOptions);
}

/** DELETE: delete the hero from the server */
deleteQueries (queryName: String): Observable<{}> {
  console.log("Delete query by name " + queryName)
  const url = `${this.queriesUrl}/${queryName}`; 
  return this.httpClient.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('query'))
    );
}

searchBookByBookName(queryName : string): Observable<{}>{
  const url = `${this.queriesUrl}/search/${queryName}`; 
  return this.httpClient.get<Queries[]>(url)
  .pipe(
    catchError(this.handleError<Queries[]>('getQueries', []))
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


