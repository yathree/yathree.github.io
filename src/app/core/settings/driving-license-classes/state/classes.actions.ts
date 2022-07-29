import { DrivingLicenseClass } from '@app/shared/models/driving-class.model';
import { createAction, props } from '@ngrx/store';

export const loadLicenseClasses = createAction('[LICENSE_CLASS] loadAll');
export const licenseClassesLoaded = createAction(
  '[LICENSE_CLASS] loadedAll',
  props<{ licenseClasses: DrivingLicenseClass[] }>()
);
export const addLicenseClass = createAction(
  '[LICENSE_CLASS] addNew',
  (licenseClass: DrivingLicenseClass) => licenseClass
);
export const licenseClassAddedSuccess = createAction(
  '[LICENSE_CLASS] added',
  props<{ licenseClass: DrivingLicenseClass }>()
);
export const updateLicenseClass = createAction(
  '[LICENSE_CLASS] update',
  (licenseClass: DrivingLicenseClass) => licenseClass
);
export const licenseClassUpdatedSuccess = createAction(
  '[LICENSE_CLASS] updated',
  props<{ licenseClass: DrivingLicenseClass }>()
);
export const selectLicenseClass = createAction(
  '[LICENSE_CLASS] select',
  props<{ licenseClass: DrivingLicenseClass }>()
);
export const cancelLicenseClassEdit = createAction(
  '[LICENSE_CLASS] cancelEdit'
);
