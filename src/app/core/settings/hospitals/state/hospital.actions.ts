import { Hospital } from '@app/shared/models/hospital.model';
import { createAction, props } from '@ngrx/store';

export const loadHospitals = createAction('[HOSPITAL] loadAll');
export const hospitalsLoaded = createAction(
  '[HOSPITAL] loadedAll',
  props<{ hospitals: Hospital[] }>()
);
export const addHospital = createAction(
  '[HOSPITAL] addNew',
  (hospital: Hospital) => hospital
);
export const hospitalAddedSuccess = createAction(
  '[HOSPITAL] added',
  props<{ hospital: Hospital }>()
);
export const updateHospital = createAction(
  '[HOSPITAL] update',
  (hospital: Hospital) => hospital
);
export const hospitalUpdatedSuccess = createAction(
  '[HOSPITAL] updated',
  props<{ hospital: Hospital }>()
);
export const selectHospital = createAction(
  '[HOSPITAL] select',
  props<{ hospital: Hospital }>()
);
export const cancelHospitalEdit = createAction('[HOSPITAL] cancelEdit');
