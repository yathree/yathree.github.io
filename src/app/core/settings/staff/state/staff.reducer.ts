import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import { addStaff, addStaffSuccess, cancelStaffUpdate, loadStaffs, selectStaff, staffsLoaded, updateStaff, updateStaffSuccess } from './staff.actions';
import { initialStaffState } from './staff.state';

export const staffReducer = createReducer(
  initialStaffState,
  on(loadStaffs, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(staffsLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.staffs,
  })),
  on(addStaff, (state) => ({ ...state, isSubmitting: true })),
  on(addStaffSuccess, (state, { staff }) => ({
    ...state,
    data: [...state.data, staff],
    isSubmitting: false,
  })),
  on(selectStaff, (state, { staff }) => ({
    ...state,
    selected: staff,
    isUpdateMode: true,
  })),
  on(updateStaff, (state) => ({ ...state, isSubmitting: true })),
  on(updateStaffSuccess, (state, { staff }) => {
    const index = state.data.findIndex((d) => d.id === staff.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = staff;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  }),
  on(cancelStaffUpdate, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
