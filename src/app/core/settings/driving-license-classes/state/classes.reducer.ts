import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import {
  addLicenseClass,
  cancelLicenseClassEdit,
  licenseClassesLoaded,
  licenseClassAddedSuccess,
  licenseClassUpdatedSuccess,
  loadLicenseClasses,
  selectLicenseClass,
  updateLicenseClass,
} from './classes.actions';
import { initialDrivingLicenseClassState } from './classes.state';

export const classesReducer = createReducer(
  initialDrivingLicenseClassState,
  on(loadLicenseClasses, (state) => ({
    ...state,
    dataState: DataState.LOADING,
  })),
  on(licenseClassesLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.licenseClasses,
  })),
  on(addLicenseClass, (state) => ({
    ...state,
    isSubmitting: true,
    isSubmitted: false,
  })),
  on(updateLicenseClass, (state) => ({
    ...state,
    isSubmitting: true,
    isSubmitted: false,
  })),
  on(licenseClassAddedSuccess, (state, { licenseClass }) => ({
    ...state,
    data: [...state.data, licenseClass],
    isSubmitting: false,
    isSubmitted: true,
  })),
  on(selectLicenseClass, (state, { licenseClass }) => ({
    ...state,
    selected: licenseClass,
    isUpdateMode: true,
  })),
  on(licenseClassUpdatedSuccess, (state, { licenseClass }) => {
    const index = state.data.findIndex((s) => s.id === licenseClass.id);
    const updatedHospitals = [...state.data];
    updatedHospitals[index] = licenseClass;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedHospitals,
      isSubmitted: true,
    };
  }),
  on(cancelLicenseClassEdit, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
