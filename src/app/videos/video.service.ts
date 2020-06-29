import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Video } from './video';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {

   private videoUrl = 'http://135.254.163.44:9001/videos';  

   private videos : Video[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

getVideos(): Observable<Video[]> {
  return this.httpClient.get<Video[]>(this.videoUrl)
  .pipe(
    catchError(this.handleError<Video[]>('getVideos', []))
  );
}

getVideossByCategory(category: String): Observable<Video[]> {
  const url = `${this.videoUrl}/${category}`; 
  return this.httpClient.get<Video[]>(url)
  .pipe(
    catchError(this.handleError<Video[]>('getVideos', []))
  );
}

addVideo(video : Video): Observable<Video> {
  const body=JSON.stringify(video);
    console.log(body)
  console.log("Before add service" + video);
 return this.httpClient.post<Video>(this.videoUrl, body, httpOptions);
}

/** DELETE: delete the hero from the server */
deleteVideo (videoName: String): Observable<{}> {
  console.log("Delete video by name " + videoName)
  const url = `${this.videoUrl}/${videoName}`; 
  return this.httpClient.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('videoName'))
    );
}

searchVideoByName(videoName : string): Observable<{}>{
  const url = `${this.videoUrl}/search/${videoName}`; 
  return this.httpClient.get<Video[]>(url)
  .pipe(
    catchError(this.handleError<Video[]>('getDocuments', []))
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


