import { Injectable } from '@angular/core';
import { addManager, addManagerSuccess, loadManagers, managersLoaded, updateManager, updateManagerSuccess } from '@app/core/settings/managers/state/manager.actions';
import { ManagerService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class ManagerEffects {
  constructor(
    private actions$: Actions,
    private managerService: ManagerService,
    private snackbar: SnackbarService
  ) {}

  loadManagers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadManagers),
      exhaustMap(() =>
        this.managerService.getAll().pipe(
          map((response) => managersLoaded({ managers: response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addManager),
      exhaustMap(({ type, ...manager }) =>
        this.managerService.save(manager).pipe(
          map((response) => addManagerSuccess({ manager: response })),
          tap(() => this.snackbar.create('Manager added successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateManager),
      exhaustMap(({ type, ...manager }) =>
        this.managerService.update(manager).pipe(
          map((response) => updateManagerSuccess({ manager: response })),
          tap(() => this.snackbar.create('Manager updated successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
