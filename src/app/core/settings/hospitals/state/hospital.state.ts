import { DataState } from '@app/shared/enums/dataState';
import { Hospital } from '@app/shared/models/hospital.model';

export interface HospitalState {
  data: Hospital[];
  dataState: DataState;
  isSubmitting: boolean;
  isSubmitted: boolean;
  selected?: Hospital;
  isUpdateMode: boolean;
}

export const initialHospitalState: HospitalState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isSubmitted: false,
  isUpdateMode: false,
};