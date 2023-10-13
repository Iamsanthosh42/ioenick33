import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Iglossyz } from 'src/glossyz';

@Injectable({
  providedIn: 'root'
})
export class GlossyzService {
private _url: string = 'assets/data/glossyz.json';
  constructor(private http:HttpClient) { }


  getitems(): Observable<Iglossyz[]> {
    return this.http.get<Iglossyz[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Not Found');
  }

  getImage(): Observable<object> {
    return this.http.get(this._url);
  }








}
