import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/shared/models/api-response.model';
import { environment } from '@env/environment';
import { catchError, map, Observable } from 'rxjs';
import { ExamSession } from '../models/exam-session.model';

@Injectable()
export class ExamSessionService {
  private readonly apiUrl = `${environment.baseUrl}/sessions`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<ExamSession[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  add(session: ExamSession) {
    return this.http.post<ApiResponse<ExamSession>>(this.apiUrl, session).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
