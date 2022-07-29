import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { role } from '@shared/enums/role.enum';
import { AuthorizationService } from '@shared/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authorization: AuthorizationService
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.authorization.hasRole(role.admin)) return true;

    this.router.navigateByUrl('dashboard');
    return false;
  }
}
