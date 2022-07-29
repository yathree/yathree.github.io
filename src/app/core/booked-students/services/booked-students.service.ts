import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/shared/models/api-response.model';
import { Student } from '@app/shared/models/student.mode';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookedStudentService {
  private readonly url = `${environment.baseUrl}/booking`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http
      .get<ApiResponse<Student[]>>(this.url)
      .pipe(map((response) => response.data));
  }

  getByDate(date: string): Observable<Student[]> {
    return this.http
      .get<ApiResponse<Student[]>>(`${this.url}/${date}`)
      .pipe(map((response) => response.data));
  }
}
