import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiResponse } from '@shared/models/api-response.model';
import { Role, Staff } from '@shared/models/staffs.model';
import { catchError, map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private readonly apiUrl = environment.baseUrl + '/staffs';
  excludesRole = ['admin', 'doctor', 'manager', 'student', 'instructor'];

  constructor(private http: HttpClient) {}

  roles$ = this.http
    .get<ApiResponse<Role[]>>(`${environment.baseUrl}/roles`)
    .pipe(
      map((response) => {
        return response.data.filter(
          (role) => !this.excludesRole.includes(role.roleName)
        );
      }),
      catchError(this.handleError),
      shareReplay(1)
    );

  getAll() {
    return this.http.get<ApiResponse<Staff[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  save(staff: Staff) {
    return this.http.post<ApiResponse<Staff>>(this.apiUrl, staff).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  update(staff: Staff): Observable<Staff> {
    return this.http
      .put<ApiResponse<Staff>>(`${this.apiUrl}`, staff)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Method not implemented.');
  }
}
