import { DataState } from '@app/shared/enums/dataState';
import { Staff } from '@app/shared/models/staffs.model';

export interface StaffState {
  data: Staff[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: Staff;
  isUpdateMode: boolean;
}

export const initialStaffState: StaffState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false,
};
