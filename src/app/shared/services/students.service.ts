import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Student } from '@shared/models/student.mode';
import { environment } from '@env/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly apiUrl = environment.baseUrl + '/doctors/students';

  students$ = (studentId: number) =>
    this.http
      .get<ApiResponse<Student>>(`${this.apiUrl}/${studentId}`)
      .pipe(map((response) => response.data));

  constructor(private http: HttpClient) {}

  submitHealthInfo(values: any) {
    return this.http.post(this.apiUrl, values);
  }

  getPaidStudents() {
    return this.http
      .get<ApiResponse<Student[]>>(`${environment.baseUrl}/paid-students`)
      .pipe(map((response) => response.data));
  }

  getPaymentStudents() {
    return this.http
      .get<ApiResponse<Student[]>>(`${environment.baseUrl}/payments`)
      .pipe(map((response) => response.data));
  }

  getCheckedStudents() {
    return this.http
      .get<ApiResponse<Student[]>>(`${environment.baseUrl}/checked-students`)
      .pipe(map((response) => response.data));
  }

  getStudentsBySchool(schoolId: number) {
    return this.http
      .get<ApiResponse<Student[]>>(
        `${environment.baseUrl}/student-school/${schoolId}`
      )
      .pipe(map((response) => response.data));
  }
}
