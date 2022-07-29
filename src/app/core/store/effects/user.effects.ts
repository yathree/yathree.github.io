import { Injectable } from '@angular/core';
import { blockUser, blockUserSuccess, loadUsers, unblockUser, unblockUserSuccess, userLoaded } from '@app/core/users/state/user.actions';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { UsersService } from '@app/shared/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private snackbar: SnackbarService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      exhaustMap(() =>
        this.userService.getAll().pipe(
          map((response) => userLoaded({users: response})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  blockUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(blockUser),
      exhaustMap(({ type, ...user }) =>
        this.userService.block(user).pipe(
          map((response) => blockUserSuccess({ user: response })),
          tap(() => this.snackbar.create('User blocked Successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );

  unblockUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unblockUser),
      exhaustMap(({ type, ...user }) =>
        this.userService.unblock(user).pipe(
          map((response) => unblockUserSuccess({ user: response })),
          tap(() => this.snackbar.create('User unblocked Successfully.')),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
