import { Component, OnInit } from '@angular/core';
import { role } from '@app/shared/enums/role.enum';
import { AuthService } from '@app/shared/services/auth.service';
import { AuthorizationService } from '@app/shared/services/authorization.service';
import { Store } from '@ngrx/store';
import { flatInstructors } from '../settings/instructors/state/instructor.selectors';
import { schoolSelector } from '../settings/schools/state/school.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isAdmin: boolean;
  userRole!: string;
  ROLE = role;

  title = 'Analytical Dashboard';
  schools$ = this.store.select(schoolSelector);
  instructors$ = this.store.select(flatInstructors);
  user = this.authService.user;

  constructor(
    private authService: AuthService,
    private authorization: AuthorizationService,
    private store: Store
  ) {
    this.isAdmin = this.authorization.hasRole(role.admin);
    this.userRole = this.authService.user.role;
    if (!this.isAdmin) this.title = 'Welcome Back';
  }

  ngOnInit(): void {}
}
