import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.baseUrl + '/signin';

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: SnackbarService
  ) { }

  login(credentials: any) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]);

        let loggedIn = false;
        return loggedIn;
      }),
      catchError(() => {
        this.snackbar.create('Login failed.', 3000);
        return throwError(() => false);
      })
    );
  }

  logout(returnUrl?: string): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login'], { queryParams: { returnUrl } });
  }

  loggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  get user() {
    const decoded = this.jwtHelper.decodeToken();
    return { id: 1, name: decoded.name, role: decoded.role };
  }
}
