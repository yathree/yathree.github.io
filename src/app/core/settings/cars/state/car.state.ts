import { DataState } from '@app/shared/enums/dataState';
import { Car } from '@app/shared/models/car.model';

export interface CarState {
  data: Car[];
  dataState: DataState;
  isSubmitting: boolean;
  isSubmitted: boolean;
  selected?: Car;
  isUpdateMode: boolean;
}

export const initialCarState: CarState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isSubmitted: false,
  isUpdateMode: false,
};