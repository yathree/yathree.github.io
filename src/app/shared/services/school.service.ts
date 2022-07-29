import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, shareReplay, map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { School } from '@shared/models/school.model';
import { ApiResponse } from '@shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  apiUrl = environment.baseUrl + '/schools';

  constructor(private http: HttpClient) {}

  schools$ = this.http.get<ApiResponse<School[]>>(this.apiUrl).pipe(
    map((response) => response.data),
    catchError(this.handleError),
    shareReplay(1)
  );

  addSchool(school: School) {
    return this.http.post<ApiResponse<School>>(this.apiUrl, school).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }
  
  updateSchool(school: School) {
    return this.http.put<ApiResponse<School>>(this.apiUrl, school).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(errpr: any): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
