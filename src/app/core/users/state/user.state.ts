import { DataState } from '@app/shared/enums/dataState';
import { User } from '@app/shared/models/user.model';

export interface UserState {
  data: User[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: User;
  isUpdateMode: boolean;
}

export const initialUserState: UserState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false
};
