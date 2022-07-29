import { DataState } from '@app/shared/enums/dataState';
import { Instructor } from '@app/shared/models';

export interface InstructorState {
  data: Instructor[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: Instructor;
  isUpdateMode: boolean;
}

export const initialInstructorState: InstructorState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false,
};
