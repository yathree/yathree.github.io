import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HospitalState } from './hospital.state';

export const hospitalState = createFeatureSelector<HospitalState>('hospitals');
export const flatHospital = createSelector(hospitalState, (state) => state.data);
export const hospitalEditMode = createSelector(hospitalState, state => state.isUpdateMode);
export const isHospitalSubmitting = createSelector(hospitalState, state => state.isSubmitting);
export const isHospitalSubmitted = createSelector(hospitalState, state => state.isSubmitted);
export const selectedHospital = createSelector(hospitalState, state => state.selected);