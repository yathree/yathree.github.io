import { Injectable } from '@angular/core';
import {
  addSchool,
  addSchoolSuccess,
  loadSchools,
  schoolLoaded,
  updateSchool,
  updateSchoolSuccess,
} from '@app/core/settings/schools/state/school.actions';
import { SchoolService } from '@app/shared/services/school.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class SchoolEffect {
  loadSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSchools),
      exhaustMap(() =>
        this.schoolService.schools$.pipe(
          map((schools) => schoolLoaded({ schools })),
          catchError(() => of(schoolLoaded({ schools: [] })))
        )
      )
    )
  );

  addSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSchool),
      exhaustMap(({ type, ...school }) =>
        this.schoolService.addSchool(school).pipe(
          map((school) => addSchoolSuccess({ school })),
          tap(() => this.snackbar.create('School added successfully')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSchool),
      exhaustMap(({ type, ...school }) =>
        this.schoolService.updateSchool(school).pipe(
          map((school) => updateSchoolSuccess({ school })),
          tap(() => this.snackbar.create('School updated successfully')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private schoolService: SchoolService,
    private snackbar: SnackbarService
  ) {}
}
