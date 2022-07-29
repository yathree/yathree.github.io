import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, shareReplay, map } from 'rxjs/operators';

import { Car } from '@shared/models/car.model';
import { environment } from '@env/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.baseUrl + '/cars';
  CarSubject = new BehaviorSubject<Car[]>([]);

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<ApiResponse<Car[]>>(this.apiUrl).pipe(
      map((response) => {
        return response.data;
      }),
      catchError(this.handleError),
      shareReplay(1)
    );
  }

  saveCar(car: Car): Observable<Car> {
    return this.http.post<ApiResponse<Car>>(this.apiUrl, car).pipe(
      map((response) => {
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  updateCar(car: Car): Observable<Car> {
    return this.http
      .put<ApiResponse<Car>>(`${this.apiUrl}`, car)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
