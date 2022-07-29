import { DataState } from '@app/shared/enums/dataState';
import { School } from '@app/shared/models/school.model';

export interface SchoolState {
  data: School[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: School;
  isUpdateMode: boolean;
}

export const initialSchoolState: SchoolState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false
};
