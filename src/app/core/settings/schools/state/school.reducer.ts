import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import {
  addSchool,
  addSchoolSuccess,
  cancelUpdate,
  loadSchools,
  schoolLoaded,
  selectSchool,
  updateSchool,
  updateSchoolSuccess,
} from './school.actions';
import { initialSchoolState } from './school.state';

export const schoolReducer = createReducer(
  initialSchoolState,
  on(loadSchools, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(schoolLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.schools,
  })),
  on(addSchool, (state) => ({ ...state, isSubmitting: true })),
  on(addSchoolSuccess, (state, { school }) => ({
    ...state,
    data: [...state.data, school],
    isSubmitting: false,
  })),
  on(selectSchool, (state, { school }) => ({
    ...state,
    selected: school,
    isUpdateMode: true,
  })),
  on(updateSchool, (state) => ({ ...state, isSubmitting: true })),
  on(updateSchoolSuccess, (state, { school }) => {
    const index = state.data.findIndex((s) => s.id === school.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = school;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  }),
  on(cancelUpdate, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
