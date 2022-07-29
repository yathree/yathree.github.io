import { Instructor } from '@app/shared/models';
import { createAction, props } from '@ngrx/store';

export const loadInstructors = createAction('[INSTRUCTOR] loadAll');
export const instructorsLoaded = createAction(
  '[INSTRUCTOR] loaded',
  props<{ instructors: Instructor[] }>()
);
export const addInstructor = createAction(
  '[INSTRUCTOR] addNew',
  (instructor: Instructor) => instructor
);
export const addInstructorSuccess = createAction(
  '[INSTRUCTOR] addSuccess',
  props<{ instructor: Instructor }>()
);
export const updateInstructor = createAction(
  '[INSTRUCTOR] update',
  (instructor: Instructor) => instructor
);
export const updateInstructorSuccess = createAction(
  '[INSTRUCTOR] updateSuccess',
  props<{ instructor: Instructor }>()
);
export const selectInstructor = createAction(
  '[INSTRUCTOR] selectInstructor',
  props<{ instructor: Instructor }>()
);
export const cancelInstructorUpdate = createAction('[INSTRUCTOR] cancelEdit');
