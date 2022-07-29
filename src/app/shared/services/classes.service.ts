import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { DrivingLicenseClass } from '../models/driving-class.model';

@Injectable({
  providedIn: 'root',
})
export class DrivingClassesService {
  private readonly apiUrl = environment.baseUrl + '/driving-class';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DrivingLicenseClass[]> {
    return this.http.get<ApiResponse<DrivingLicenseClass[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  create(drivingClass: DrivingLicenseClass) {
    return this.http
      .post<ApiResponse<DrivingLicenseClass>>(this.apiUrl, drivingClass)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  update(drivingClass: DrivingLicenseClass): Observable<DrivingLicenseClass> {
    return this.http
      .put<ApiResponse<DrivingLicenseClass>>(`${this.apiUrl}`, drivingClass)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
