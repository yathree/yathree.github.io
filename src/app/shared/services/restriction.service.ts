import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay, tap } from 'rxjs';
import { Restriction } from '../models';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService {
  private readonly apiUrl = environment.baseUrl + '/restrictions';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<Restriction[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      shareReplay(1),
      catchError(this.handleError)
    );
  }

  save(instructor: Restriction) {
    return this.http
      .post<ApiResponse<Restriction>>(this.apiUrl, instructor)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  update(restriction: Restriction) {
    return this.http
      .put<ApiResponse<Restriction>>(`${this.apiUrl}`, restriction)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
