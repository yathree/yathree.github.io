import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { Instructor } from '../models';
import { ApiResponse } from '../models/api-response.model';
import { Learner } from '../models/learner.model';

@Injectable({
  providedIn: 'root',
})

export class DemeritService {
  private readonly apiUrl = environment.baseUrl + '/instructors';

  constructor(private http: HttpClient) { }


  save(instructor: Instructor) {
    return this.http
      .post<ApiResponse<Instructor>>(this.apiUrl, instructor)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }


  getAllStudents() {
    return this.http
      .get<ApiResponse<Learner>>(`${environment.baseUrl}/driving-license`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
