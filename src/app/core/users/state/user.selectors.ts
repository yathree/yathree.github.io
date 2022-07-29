import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const userState = createFeatureSelector<UserState>('user');
export const flatUsers = createSelector(userState, (state) => state.data);
export const userSubmitting = createSelector(userState, (state) => state.isSubmitting);
export const selectedUser = createSelector(userState, (state) => state.selected);
export const userUpdateMode = createSelector(userState, (state) => state.isUpdateMode);
