import { School } from '@app/shared/models/school.model';
import { createAction, props } from '@ngrx/store';

export const loadSchools = createAction('[SCHOOL] loadAll');
export const schoolLoaded = createAction(
  '[SCHOOL] loaded',
  props<{ schools: School[] }>()
);
export const addSchool = createAction(
  '[SCHOOL] addNew',
  (school: School) => school
);
export const addSchoolSuccess = createAction(
  '[SCHOOL] addSuccess',
  props<{ school: School }>()
);
export const updateSchool = createAction(
  '[SCHOOL] update',
  (school: School) => school
);
export const updateSchoolSuccess = createAction(
  '[SCHOOL] updateSuccess',
  props<{ school: School }>()
);
export const selectSchool = createAction(
  '[SCHOOL] selectSchool',
  props<{ school: School }>()
);
export const cancelUpdate = createAction('[SCHOOL] cancelEdit');
