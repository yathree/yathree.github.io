import { Injectable } from '@angular/core';
import { addStaff, addStaffSuccess, loadStaffs, staffsLoaded, updateStaff, updateStaffSuccess } from '@app/core/settings/staff/state/staff.actions';
import { StaffService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private staffService: StaffService,
    private snackbar: SnackbarService
  ) {}

  loadStaffs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStaffs),
      exhaustMap(() =>
        this.staffService.getAll().pipe(
          map((response) => staffsLoaded({ staffs: response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStaff),
      exhaustMap(({ type, ...staff }) =>
        this.staffService.save(staff).pipe(
          map((response) => addStaffSuccess({ staff: response })),
          tap(() => this.snackbar.create('Staff Added Successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStaff),
      exhaustMap(({ type, ...instructor }) =>
        this.staffService.update(instructor).pipe(
          map((response) => updateStaffSuccess({ staff: response })),
          tap(() => this.snackbar.create('Staff Updated Successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
