import { createAction, props } from '@ngrx/store';
import { Doctor } from '../models/doctor.model';

export const loadDoctors = createAction('[DOCTOR] loadAll');
export const doctorsLoaded = createAction(
  '[DOCTOR] loaded',
  props<{ doctors: Doctor[] }>()
);
export const addDoctor = createAction(
  '[DOCTOR] addNew',
  (doctor: Doctor) => doctor
);
export const addDoctorSuccess = createAction(
  '[DOCTOR] addSuccess',
  props<{ doctor: Doctor }>()
);
export const updateDoctor = createAction(
  '[DOCTOR] update',
  (doctor: Doctor) => doctor
);
export const updateDoctorSuccess = createAction(
  '[DOCTOR] updateSuccess',
  props<{ doctor: Doctor }>()
);
export const selectDoctor = createAction(
  '[DOCTOR] selectDoctor',
  props<{ doctor: Doctor }>()
);
export const cancelDoctorUpdate = createAction('[DOCTOR] cancelEdit');
