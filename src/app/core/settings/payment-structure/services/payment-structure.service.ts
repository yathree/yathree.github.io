import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { PaymentStructure } from '../models/payment-structure';
import { ApiResponse } from '@app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentStructureService {
  private readonly apiUrl = environment.baseUrl + '/paymentstructure';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<PaymentStructure[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  update(payment: PaymentStructure): Observable<PaymentStructure> {
    return this.http
      .put<ApiResponse<PaymentStructure>>(`${this.apiUrl}`, payment)
      .pipe(map(response => response.data), catchError(this.handleError));
  }

  private handleError(e: any): Observable<never> {
    throw new Error('Something went wrong.');
  }
}
