import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/shared/models/api-response.model';
import { environment } from '@env/environment';
import { catchError, map, Observable } from 'rxjs';
import { ExamResult } from '../models/exam-result.model';

@Injectable()
export class ExamResultService {
  private readonly apiUrl = `${environment.baseUrl}/`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<ExamResult[]>>(this.apiUrl+'current-booking').pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  add(result: ExamResult) {
    return this.http.post<ApiResponse<ExamResult>>(this.apiUrl+'theory-result', result).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
