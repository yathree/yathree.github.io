import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { Instructor } from '../models';
import { ApiResponse } from '../models/api-response.model';
import { Manager } from '../models/manager.model';
import { School } from '../models/school.model';
import { Student } from '../models/student.mode';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private readonly apiUrl = environment.baseUrl + '/managers';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<Manager[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  save(manager: Manager) {
    return this.http.post<ApiResponse<Manager>>(this.apiUrl, manager).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  update(manager: Manager): Observable<Manager> {
    return this.http.put<ApiResponse<Manager>>(`${this.apiUrl}`, manager).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  getManagerStudents() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/managers/students`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getRowStudents() {
    return this.http
      .get<ApiResponse<Student>>(`${environment.baseUrl}/managers/fit-students`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  confirmStudent(id: number) {
    return this.http
      .post<ApiResponse<any>>(`${this.apiUrl}/students/confirm`, { id })
      .pipe(
        map((response) => response.data),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getManagerSchools() {
    return this.http.get<ApiResponse<School[]>>(`${this.apiUrl}/schools`).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  getManagerInstructors() {
    return this.http
      .get<ApiResponse<Instructor[]>>(`${this.apiUrl}/instructors`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  getInfoById(type: string, id: string) {
    return this.http
      .get<ApiResponse<Student>>(
        `${environment.baseUrl}/info/${type.toUpperCase()}/${id}`
      )
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  addStudent(student: Student) {
    return this.http
      .post<ApiResponse<Student>>(`${this.apiUrl}/add-student`, student)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  assignClass(data: { studentId: string, drivingClassId: number }) {
    return this.http
      .post<ApiResponse<any>>(`${this.apiUrl}/add-class`, data)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getCars() {
    return this.http.get<ApiResponse<Manager[]>>(this.apiUrl+'/shool-cars').pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
