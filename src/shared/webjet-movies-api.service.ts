import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class WebjetMoviesService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'sjd1HfkjU83ksdsm3802k',
          'Content-Type': 'application/json',
        })
      };

      getCheapMovies(): Observable<any> {
        return this.http.get(environment.apiUrl).pipe(map((response: any) => response));
      }

      handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }
}
