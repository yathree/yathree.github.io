import { Injectable } from '@angular/core';
import {
  addInstructor,
  addInstructorSuccess,
  instructorsLoaded,
  loadInstructors,
  updateInstructor,
  updateInstructorSuccess,
} from '@app/core/settings/instructors/state/instructor.actions';
import { InstructorService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class InstructorEffects {
  constructor(
    private actions$: Actions,
    private instructorService: InstructorService,
    private snackbar: SnackbarService
  ) {}

  loadInstructors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInstructors),
      exhaustMap(() =>
        this.instructorService.getAll().pipe(
          map((response) => instructorsLoaded({ instructors: response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addInstructor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addInstructor),
      exhaustMap(({ type, ...instructor }) =>
        this.instructorService.save(instructor).pipe(
          map((response) => addInstructorSuccess({ instructor: response })),
          tap(() => this.snackbar.create('Instructor added successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateInstructor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateInstructor),
      exhaustMap(({ type, ...instructor }) =>
        this.instructorService.update(instructor).pipe(
          map((response) => updateInstructorSuccess({ instructor: response })),
          tap(() => this.snackbar.create('Instructor updated successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
