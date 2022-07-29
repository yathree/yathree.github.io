import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private authService: AuthService) { }

  hasRole(role: string | string[]) {
    const userRole = this.authService.user.role;
    if (role instanceof Array) return role.includes(userRole);
    return role === userRole;
  }
}
