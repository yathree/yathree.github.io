import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import { addCar, cancelCarEdit, carsLoaded, carAddedSuccess, carUpdatedSuccess, loadCars, selectCar, updateCar } from './car.actions';
import { initialCarState } from './car.state';

export const carReducer = createReducer(
  initialCarState,
  on(loadCars, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(carsLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.cars,
  })),
  on(addCar, (state) => ({ ...state, isSubmitting: true, isSubmitted: false })),
  on(updateCar, (state) => ({ ...state, isSubmitting: true, isSubmitted: false })),
  on(carAddedSuccess, (state, { car }) => ({
    ...state,
    data: [...state.data, car],
    isSubmitting: false,
    isSubmitted: true
  })),
  on(selectCar, (state, { car }) => ({
    ...state,
    selected: car,
    isUpdateMode: true,
  })),
  on(carUpdatedSuccess, (state, { car }) => {
    const index = state.data.findIndex((s) => s.id === car.id);
    const updatedCars = [...state.data];
    updatedCars[index] = car;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedCars,
      isSubmitted: true
    };
  }),
  on(cancelCarEdit, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);

