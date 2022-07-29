import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { Instructor } from '../models';
import { ApiResponse } from '../models/api-response.model';
import { PracticalBoking } from '../models/booking.model';
import { Student } from '../models/student.mode';

@Injectable({
  providedIn: 'root',
})

export class CcService {
  private readonly apiUrl = environment.baseUrl + '/';

  constructor(private http: HttpClient) { }


  // save(instructor: Instructor) {
  //   return this.http
  //     .post<ApiResponse<Instructor>>(this.apiUrl, instructor)
  //     .pipe(
  //       map((response) => response.data),
  //       catchError(this.handleError)
  //     );
  // }

  confirm(values: PracticalBoking) {
    return this.http.post<ApiResponse<PracticalBoking>>(this.apiUrl+'confirm-result', values).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  // getLicences(){
  //   return this.http.get(`${this.apiUrl+'students/license-payments'}`)
  // }

  getAllStudents() {
    return this.http
      .get<ApiResponse<Student>>(`${this.apiUrl}pass-practical`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getCc(confirmNo:any) {
    return this.http.get<ApiResponse<Student[]>>(this.apiUrl+'cc-info/'+confirmNo).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getStr(confirmNo:any) {
    return this.http.get<ApiResponse<Student[]>>(this.apiUrl+'str-info/'+confirmNo).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
