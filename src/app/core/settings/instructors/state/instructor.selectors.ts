import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InstructorState } from './instructor.state';

export const instructorSelector = createFeatureSelector<InstructorState>('instructor');
export const instructorSubmitSelector = createSelector(instructorSelector, (state) => state.isSubmitting);
export const selectedInstructorSelector = createSelector(instructorSelector, (state) => state.selected);
export const updateModeSelector = createSelector(instructorSelector, (state) => state.isUpdateMode);
export const flatInstructors = createSelector(instructorSelector, (state) => state.data);
