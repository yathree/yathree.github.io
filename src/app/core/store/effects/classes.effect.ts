import { Injectable } from '@angular/core';
import {
  addLicenseClass,
  licenseClassAddedSuccess,
  licenseClassesLoaded,
  licenseClassUpdatedSuccess,
  loadLicenseClasses,
  updateLicenseClass,
} from '@app/core/settings/driving-license-classes/state/classes.actions';

import { DrivingClassesService } from '@app/shared/services/classes.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class DrivingClassEffects {
  constructor(
    private actions$: Actions,
    private drivingClassService: DrivingClassesService,
    private snackbar: SnackbarService
  ) {}

  loadClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLicenseClasses),
      exhaustMap(() =>
        this.drivingClassService.getAll().pipe(
          map((response) => licenseClassesLoaded({ licenseClasses: response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addLicenseClass),
      exhaustMap(({ type, ...drivingClass }) =>
        this.drivingClassService.create(drivingClass).pipe(
          map((response) =>
            licenseClassAddedSuccess({ licenseClass: response })
          ),
          tap(() => this.snackbar.create('Drving class Added Successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLicenseClass),
      exhaustMap(({ type, ...drivingClass }) =>
        this.drivingClassService.update(drivingClass).pipe(
          map((response) =>
            licenseClassUpdatedSuccess({ licenseClass: response })
          ),
          tap(() =>
            this.snackbar.create('Driving Class Updated Successfully.')
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
