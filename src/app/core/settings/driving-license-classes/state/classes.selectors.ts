import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DrivingLicenseClassState } from './classes.state';

export const licenseClassState =
  createFeatureSelector<DrivingLicenseClassState>('classes');
export const flatLicenseClassState = createSelector(
  licenseClassState,
  (state) => state.data
);
export const licenseClassStateEditMode = createSelector(
  licenseClassState,
  (state) => state.isUpdateMode
);
export const isLicenseClassStateSubmitting = createSelector(
  licenseClassState,
  (state) => state.isSubmitting
);
export const isLicenseClassStateSubmitted = createSelector(
  licenseClassState,
  (state) => state.isSubmitted
);
export const selectedLicenseClassState = createSelector(
  licenseClassState,
  (state) => state.selected
);
