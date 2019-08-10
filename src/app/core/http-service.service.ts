import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL = environment.apiURL;

  constructor(private http : HttpClient) { }

  get(url: string, options?: any): Observable<any> {

    return this.http.get(this.getFullUrl(url), options).pipe(
        retry(0),
        catchError(this.onCatch),
        tap(
            data => '',
            error => console.log(error)
        )
    );
  }

  private onCatch(message: any, caught: Observable<any>): Observable<any> {
    return throwError(message);
  }



  private getFullUrl(url: string): string {
    return this.apiURL + url;
  }
}
