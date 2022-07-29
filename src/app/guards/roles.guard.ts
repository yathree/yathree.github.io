import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '@shared/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  constructor(
    private router: Router,
    private authorization: AuthorizationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    if (this.authorization.hasRole(route.data['roles'])) return true;

    this.router.navigateByUrl('dashboard');
    return false;
  }
}
