import { Car } from '@app/shared/models/car.model';
import { createAction, props } from '@ngrx/store';

export const loadCars = createAction('[CAR] loadAll');
export const carsLoaded = createAction(
  '[CAR] loadedAll',
  props<{ cars: Car[] }>()
);
export const addCar = createAction(
  '[CAR] addNew',
  (car: Car) => car
);
export const carAddedSuccess = createAction(
  '[CAR] added',
  props<{ car: Car }>()
);
export const updateCar = createAction(
  '[CAR] update',
  (car: Car) => car
);
export const carUpdatedSuccess = createAction(
  '[CAR] updated',
  props<{ car: Car }>()
);
export const selectCar = createAction(
  '[CAR] select',
  props<{ car: Car }>()
);
export const cancelCarEdit = createAction('[CAR] cancelEdit');
