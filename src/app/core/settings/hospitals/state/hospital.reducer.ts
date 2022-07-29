import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import { addHospital, cancelHospitalEdit, hospitalsLoaded, hospitalAddedSuccess, hospitalUpdatedSuccess, loadHospitals, selectHospital, updateHospital } from './hospital.actions';
import { initialHospitalState } from './hospital.state';

export const hospitalReducer = createReducer(
  initialHospitalState,
  on(loadHospitals, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(hospitalsLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.hospitals,
  })),
  on(addHospital, (state) => ({ ...state, isSubmitting: true, isSubmitted: false })),
  on(updateHospital, (state) => ({ ...state, isSubmitting: true, isSubmitted: false })),
  on(hospitalAddedSuccess, (state, { hospital }) => ({
    ...state,
    data: [...state.data, hospital],
    isSubmitting: false,
    isSubmitted: true
  })),
  on(selectHospital, (state, { hospital }) => ({
    ...state,
    selected: hospital,
    isUpdateMode: true,
  })),
  on(hospitalUpdatedSuccess, (state, { hospital }) => {
    const index = state.data.findIndex((s) => s.id === hospital.id);
    const updatedHospitals = [...state.data];
    updatedHospitals[index] = hospital;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedHospitals,
      isSubmitted: true
    };
  }),
  on(cancelHospitalEdit, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);

