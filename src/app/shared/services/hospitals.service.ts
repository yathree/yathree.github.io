import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, shareReplay, map } from 'rxjs/operators';

import { Hospital } from '@shared/models/hospital.model';
import { environment } from '@env/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  apiUrl = environment.baseUrl + '/hospitals';
  hospitalSubject = new BehaviorSubject<Hospital[]>([]);

  constructor(private http: HttpClient) {}

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<ApiResponse<Hospital[]>>(this.apiUrl).pipe(
      map((response) => {
        return response.data;
      }),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  saveHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<ApiResponse<Hospital>>(this.apiUrl, hospital).pipe(
      map((response) => {
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  updateHospital(hospital: Hospital): Observable<Hospital> {
    return this.http
      .put<ApiResponse<Hospital>>(`${this.apiUrl}`, hospital)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
