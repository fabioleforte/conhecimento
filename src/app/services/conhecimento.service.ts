import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Conhecimentos } from './../models/conhecimento';

@Injectable({
  providedIn: 'root'
})
export class ConhecimentoService {

  private conhecimentosUrl = 'api/conhecimentos';


  constructor(private http: HttpClient) { }

  getAll(search?: string): Observable<Conhecimentos[]> {
    return this.http.get<Conhecimentos[]>(this.conhecimentosUrl, { params: { q: search } }).pipe(
      map(resp => resp),
      // tap(_ => this.console.log('Conhecimento')),
      catchError(this.handleError<Conhecimentos[]>('Conhecimento', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
