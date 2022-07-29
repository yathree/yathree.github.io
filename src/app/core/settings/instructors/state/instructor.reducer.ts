import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import {
  addInstructor,
  addInstructorSuccess,
  cancelInstructorUpdate,
  instructorsLoaded,
  loadInstructors,
  selectInstructor,
  updateInstructor,
  updateInstructorSuccess,
} from './instructor.actions';
import { initialInstructorState } from './instructor.state';

export const instructorReducer = createReducer(
  initialInstructorState,
  on(loadInstructors, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(instructorsLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.instructors,
  })),
  on(addInstructor, (state) => ({ ...state, isSubmitting: true })),
  on(addInstructorSuccess, (state, { instructor }) => ({
    ...state,
    data: [...state.data, instructor],
    isSubmitting: false,
  })),
  on(selectInstructor, (state, { instructor }) => ({
    ...state,
    selected: instructor,
    isUpdateMode: true,
  })),
  on(updateInstructor, (state) => ({ ...state, isSubmitting: true })),
  on(updateInstructorSuccess, (state, { instructor }) => {
    const index = state.data.findIndex((d) => d.id === instructor.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = instructor;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  }),
  on(cancelInstructorUpdate, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
