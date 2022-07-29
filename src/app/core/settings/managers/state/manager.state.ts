import { DataState } from '@app/shared/enums/dataState';
import { Manager } from '@app/shared/models/manager.model';

export interface ManagerState {
  data: Manager[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: Manager;
  isUpdateMode: boolean;
}

export const initialManagerState: ManagerState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false,
};
