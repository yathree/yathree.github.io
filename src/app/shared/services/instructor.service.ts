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
export class InstructorService {
  private readonly apiUrl = environment.baseUrl + '/instructors';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<Instructor[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  save(instructor: Instructor) {
    return this.http
      .post<ApiResponse<Instructor>>(this.apiUrl, instructor)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  update(instructor: Instructor) {
    return this.http
      .put<ApiResponse<Instructor>>(`${this.apiUrl}`, instructor)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getAllStudents() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-students`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getConfirmedBooking(){
    return this.http
      .get<ApiResponse<PracticalBoking>>(`${environment.baseUrl}/instructors/confirm-booking`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      )
  }

  getPracticalBooking(){
    return this.http
      .get<ApiResponse<PracticalBoking>>(`${environment.baseUrl}/instructors/practical-booking`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getAllStudentsA() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-studentsA`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getAllStudentsB() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-studentsB`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getAllStudentsC() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-studentsC`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getAllStudentsD() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-studentsD`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getAllStudentsE() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/instructors/pass-studentsE`)
      .pipe(
        map((response) => response.data),
        
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  controlNumber(classId:any,code: any) {
    return this.http
      .post<ApiResponse<any>>(`${this.apiUrl}/paymentInfo`, { classId,code })
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
