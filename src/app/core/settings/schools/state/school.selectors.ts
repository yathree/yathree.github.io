import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SchoolState } from './school.state';

export const schoolSelector = createFeatureSelector<SchoolState>('schools');
export const schoolListSelector = createSelector(
  schoolSelector,
  (state) => state.data
);

export const schoolSubmitSelector = createSelector(
  schoolSelector,
  (state) => state.isSubmitting
);
export const selectedSchoolSelector = createSelector(
  schoolSelector,
  (state) => state.selected
);
export const updateModeSelector = createSelector(
  schoolSelector,
  (state) => state.isUpdateMode
);
