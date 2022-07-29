import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { loadHospitals } from './settings/hospitals/state/hospital.actions';
import { loadSchools } from './settings/schools/state/school.actions';
import { loadInstructors } from './settings/instructors/state/instructor.actions';
import { loadManagers } from './settings/managers/state/manager.actions';
import { loadStaffs } from './settings/staff/state/staff.actions';
import { AuthService } from '@app/shared/services/auth.service';
import { role } from '@app/shared/enums/role.enum';
import { loadLicenseClasses } from './settings/driving-license-classes/state/classes.actions';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit, OnDestroy {
  opened = true;
  isOver = false;
  logoTitle = environment.logoTitle;
  unsubscribe$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.responsiveNavigation();

    if (this.authService.user.role === role.admin) {
      this.store.dispatch(loadHospitals());
      this.store.dispatch(loadSchools());
      this.store.dispatch(loadInstructors());
      this.store.dispatch(loadManagers());
      this.store.dispatch(loadStaffs());
      this.store.dispatch(loadLicenseClasses());
    }

    if (this.authService.user.role === role.manager) {
      this.store.dispatch(loadLicenseClasses());
    }
  }

  onOpenedChange(isOpened: boolean): void {
    this.opened = isOpened;
  }

  responsiveNavigation(): void {
    this.breakpointObserver
      .observe(['(min-width: 980px)'])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isOver = false;
          this.opened = true;
        } else {
          this.isOver = true;
          this.opened = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
