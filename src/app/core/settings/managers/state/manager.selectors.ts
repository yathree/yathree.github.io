import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagerState } from './manager.state';

export const managerState =
  createFeatureSelector<ManagerState>('manager');
export const managerSubmitSelector = createSelector(
  managerState,
  (state) => state.isSubmitting
);
export const selectedManagerSelector = createSelector(
  managerState,
  (state) => state.selected
);
export const updateModeSelector = createSelector(
  managerState,
  (state) => state.isUpdateMode
);
export const flatManagers = createSelector(
  managerState,
  (state) => state.data
);
