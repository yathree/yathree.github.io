import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { PracticalBoking } from '../models/booking.model';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root',
})
export class PracticalExam {
  private readonly apiUrl = environment.baseUrl + '/';

  constructor(private http: HttpClient) {}

  getBookedStudents() {
    return this.http.get<ApiResponse<School[]>>(this.apiUrl+'examiner/examine-student').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getPre() {
    return this.http.get<ApiResponse<School[]>>(this.apiUrl+'examiner/pending-student').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getYard() {
    return this.http.get<ApiResponse<School[]>>(this.apiUrl+'examiner/preCheck-result').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getRoad() {
    return this.http.get<ApiResponse<School[]>>(this.apiUrl+'examiner/yardCheck-result').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  add(value: PracticalBoking,api:any) {
    return this.http.post<ApiResponse<PracticalBoking>>(this.apiUrl+'examiner/'+api, value  ).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  getStudentBook() {
    return this.http.get<ApiResponse<PracticalBoking[]>>(this.apiUrl+'practical-booking').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  

  get() {
    return this.http.get<ApiResponse<PracticalBoking[]>>(this.apiUrl+'practical-booking').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }



  confirm(values: PracticalBoking) {
    return this.http.post<ApiResponse<PracticalBoking>>(this.apiUrl+'confirm-booking', values).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
