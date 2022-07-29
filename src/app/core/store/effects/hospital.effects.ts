import { Injectable } from '@angular/core';
import {addHospital, hospitalAddedSuccess, hospitalsLoaded, hospitalUpdatedSuccess, loadHospitals, updateHospital} from '@app/core/settings/hospitals/state/hospital.actions';
import { HospitalService } from '@app/shared/services/hospitals.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, of, tap } from 'rxjs';

@Injectable()
export class HospitalEffects {
  loadHospitals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHospitals),
      exhaustMap(() =>
        this.hospitalService.getHospitals().pipe(
          map((hospitals) => hospitalsLoaded({ hospitals })),
          catchError(() => of(hospitalsLoaded({ hospitals: [] })))
        )
      )
    )
  );

  addHospital$ = createEffect(() => 
    this.actions$.pipe(
        ofType(addHospital),
        exhaustMap(({type, ...hospital}) => 
        this.hospitalService.saveHospital(hospital).pipe(
            map(response => hospitalAddedSuccess({hospital: response})),
            tap(() => this.snackbar.create('Hospital added successfully.')),
            catchError(() => EMPTY)
        ))
    )
  );

  updateHospital$ = createEffect(() => 
    this.actions$.pipe(
        ofType(updateHospital),
        exhaustMap(({type, ...hospital}) => 
        this.hospitalService.updateHospital(hospital).pipe(
            map(response => hospitalUpdatedSuccess({hospital: response})),
            tap(() => this.snackbar.create('Hospital updated successfully.')),
            catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private hospitalService: HospitalService,
    private snackbar: SnackbarService
  ) {}
}
