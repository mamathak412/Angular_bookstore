import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Document } from './document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

   private documentUrl = 'http://135.254.163.44:9001/documents';  

   private documents : Document[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  /** GET heroes from the server */
getDocuments(): Observable<Document[]> {
  return this.httpClient.get<Document[]>(this.documentUrl)
  .pipe(
    catchError(this.handleError<Document[]>('getDocuments', []))
  );
}

/** GET heroes from the server */
getDocumentsByCategory(category: String): Observable<Document[]> {
  const url = `${this.documentUrl}/${category}`; 
  return this.httpClient.get<Document[]>(url)
  .pipe(
    catchError(this.handleError<Document[]>('getDocuments', []))
  );
}

/** Add devops book */
addDocument(document : Document): Observable<Document> {
  const body=JSON.stringify(document);
    console.log(body)
  console.log("Before add service" + document);
 return this.httpClient.post<Document>(this.documentUrl, body, httpOptions);
}

/** DELETE: delete the hero from the server */
deleteDocument (documentName: String): Observable<{}> {
  console.log("Delete document by name " + documentName)
  const url = `${this.documentUrl}/${documentName}`; 
  return this.httpClient.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('document'))
    );
}

searchBookByBookName(documentName : string): Observable<{}>{
  const url = `${this.documentUrl}/search/${documentName}`; 
  return this.httpClient.get<Document[]>(url)
  .pipe(
    catchError(this.handleError<Document[]>('getDocuments', []))
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


