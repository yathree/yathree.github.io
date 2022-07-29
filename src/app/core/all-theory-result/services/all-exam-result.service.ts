import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/shared/models/api-response.model';
import { environment } from '@env/environment';
import { catchError, map, Observable } from 'rxjs';
import { AllExamResult } from '../models/all-exam-result.model';

@Injectable()
export class AllExamResultService {
  private readonly apiUrl = `${environment.baseUrl}/`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<AllExamResult[]>>(this.apiUrl+'all-theory-result').pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
