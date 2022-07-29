import { User } from '@app/shared/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[USER] loadAll');
export const userLoaded = createAction('[USER] loaded', props<{ users: User[] }>());

export const blockUser = createAction('[USER] block', (user: User) => user);
export const blockUserSuccess = createAction('[USER] bockSuccess', props<{ user: User }>());
export const unblockUser = createAction('[USER] unblock', (user: User) => user);
export const unblockUserSuccess = createAction('[USER] unbockSuccess', props<{ user: User }>());

