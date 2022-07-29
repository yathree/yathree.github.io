/**
 *
 * @name UsersServices
 * @description Deals with all user's resouce operations
 * @author Hussein Muhammad Khamis
 *
 * */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User } from '@shared/models/user.model';
import { catchError, map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = `${environment.baseUrl}/staffs` ;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApiResponse<User[]>>(`${this.apiUrl}/alluser`).pipe(
      map((response) => response.data),
      catchError(this.catchError)
    );
  }

  block(user: User) {
    return this.http.put<ApiResponse<User>>(`${this.apiUrl}/blockuser`, user).pipe(
      map((response) => response.data),
      catchError(this.catchError)
    );
  }

  unblock(user: User) {
    return this.http.put<ApiResponse<User>>(`${this.apiUrl}/unblockuser`, user).pipe(
      map((response) => response.data),
      catchError(this.catchError)
    );
  }

  private catchError(): Observable<never> {
    throw new Error('Something went wrong');
  }
}
