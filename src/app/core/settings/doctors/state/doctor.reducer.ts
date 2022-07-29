import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import {
  addDoctor,
  addDoctorSuccess,
  cancelDoctorUpdate,
  doctorsLoaded,
  loadDoctors,
  selectDoctor,
  updateDoctor,
  updateDoctorSuccess,
} from './doctor.actions';
import { initialDoctorState } from './doctor.state';

export const doctorReducer = createReducer(
  initialDoctorState,
  on(loadDoctors, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(doctorsLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.doctors,
  })),
  on(addDoctor, (state) => ({ ...state, isSubmitting: true })),
  on(addDoctorSuccess, (state, { doctor }) => ({
    ...state,
    data: [...state.data, doctor],
    isSubmitting: false,
  })),
  on(selectDoctor, (state, { doctor }) => ({
    ...state,
    selected: doctor,
    isUpdateMode: true,
  })),
  on(updateDoctor, (state) => ({ ...state, isSubmitting: true })),
  on(updateDoctorSuccess, (state, { doctor }) => {
    const index = state.data.findIndex((s) => s.id === doctor.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = doctor;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  }),
  on(cancelDoctorUpdate, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
