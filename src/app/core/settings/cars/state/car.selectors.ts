import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarState } from './car.state';

export const carState = createFeatureSelector<CarState>('cars');
export const flatCar = createSelector(carState, (state) => state.data);
export const carEditMode = createSelector(carState, state => state.isUpdateMode);
export const isCarSubmitting = createSelector(carState, state => state.isSubmitting);
export const isCarSubmitted = createSelector(carState, state => state.isSubmitted);
export const selectedCar = createSelector(carState, state => state.selected);