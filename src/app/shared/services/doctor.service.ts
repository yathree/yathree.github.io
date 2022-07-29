import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Doctor } from '@app/core/settings/doctors/models/doctor.model';
import { environment } from '@env/environment';
import { ApiResponse } from '../models/api-response.model';
import { Student } from '../models/student.mode';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private readonly apiUrl = environment.baseUrl + '/doctors';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Doctor[]> {
    return this.http.get<ApiResponse<Doctor[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  saveDoctor(doctor: Doctor) {
    return this.http.post<ApiResponse<Doctor>>(this.apiUrl, doctor).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<ApiResponse<Doctor>>(`${this.apiUrl}`, doctor).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  getCheckedStudents() {
    return this.http
      .get<ApiResponse<Student[]>>(`${this.apiUrl}/students`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getPaidStudents() {
    return this.http
      .get<ApiResponse<Student[]>>(`${this.apiUrl}/paid-students`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
