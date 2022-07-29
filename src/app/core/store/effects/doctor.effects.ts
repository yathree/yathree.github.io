import { Injectable } from '@angular/core';
import {
  addDoctor,
  addDoctorSuccess,
  doctorsLoaded,
  loadDoctors,
  updateDoctor,
  updateDoctorSuccess,
} from '@app/core/settings/doctors/state/doctor.actions';
import { DoctorService } from '@app/shared/services/doctor.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class DoctorEffect {
  loadDoctors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDoctors),
      exhaustMap(() =>
        this.doctorServie.getAll().pipe(
          map((doctors) => doctorsLoaded({ doctors })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addDoctors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDoctor),
      exhaustMap(({ type, ...doctor }) =>
        this.doctorServie.saveDoctor(doctor).pipe(
          map((response) => addDoctorSuccess({ doctor: response })),
          tap(() => this.snackbar.create('Doctor added successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDoctor),
      exhaustMap(({ type, ...doctor }) =>
        this.doctorServie.updateDoctor(doctor).pipe(
          map((doctor) => updateDoctorSuccess({ doctor })),
          tap(() => this.snackbar.create('Doctor added successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions, 
    private doctorServie: DoctorService,
    private snackbar: SnackbarService
  ) {}
}
