import { Staff } from '@app/shared/models/staffs.model';
import { createAction, props } from '@ngrx/store';

export const loadStaffs = createAction('[STAFF] loadAll');
export const staffsLoaded = createAction(
  '[STAFF] loaded',
  props<{ staffs: Staff[] }>()
);
export const addStaff = createAction(
  '[STAFF] addNew',
  (staff: Staff) => staff
);
export const addStaffSuccess = createAction(
  '[STAFF] addSuccess',
  props<{ staff: Staff }>()
);
export const updateStaff = createAction(
  '[STAFF] update',
  (staff: Staff) => staff
);
export const updateStaffSuccess = createAction(
  '[STAFF] updateSuccess',
  props<{ staff: Staff }>()
);
export const selectStaff = createAction(
  '[STAFF] selectStaff',
  props<{ staff: Staff }>()
);
export const cancelStaffUpdate = createAction('[STAFF] cancelEdit');
