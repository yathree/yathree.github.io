import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Learner } from '../models/learner.model';

@Injectable({
  providedIn: 'root',
})
export class LearnerService {
  private readonly apiUrl = environment.baseUrl + '/learner';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<ApiResponse<Learner[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getStudentsLearner(id:any) {
    return this.http.get<ApiResponse<Learner[]>>(this.apiUrl+'/'+id).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  revoke(id: Learner) {
    return this.http.put<ApiResponse<Learner>>(this.apiUrl+'-revoke', id).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  renew(value: Learner) {
    return this.http.post<ApiResponse<Learner>>(this.apiUrl+'-renew', value).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
