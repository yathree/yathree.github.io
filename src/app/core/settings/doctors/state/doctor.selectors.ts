import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DoctorState } from './doctor.state';

export const doctorSelector = createFeatureSelector<DoctorState>('doctor');
export const doctorSubmitSelector = createSelector(
  doctorSelector,
  (state) => state.isSubmitting
);
export const selectedDoctorSelector = createSelector(
  doctorSelector,
  (state) => state.selected
);
export const updateModeSelector = createSelector(
  doctorSelector,
  (state) => state.isUpdateMode
);
