import { DataState } from '@app/shared/enums/dataState';
import { User } from '@app/shared/models/user.model';
import { createReducer, on } from '@ngrx/store';
import { blockUser, blockUserSuccess, loadUsers, unblockUser, unblockUserSuccess, userLoaded } from './user.actions';
import { initialUserState, UserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  on(loadUsers, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(userLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.users,
  })),
  on(blockUser, updateUser()),
  on(blockUserSuccess, updateUserSuccess()),
  on(unblockUser, updateUser()),
  on(unblockUserSuccess, updateUserSuccess())
);

function updateUser() {
  return (state: UserState) => ({ ...state, isSubmitting: true });
}

function updateUserSuccess() {
  return (state: UserState, {user}: any) => {
    const index = state.data.findIndex((s) => s.id === user.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = user;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  };
}

