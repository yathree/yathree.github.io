import { DataState } from '@app/shared/enums/dataState';
import { Doctor } from '../models/doctor.model';

export interface DoctorState {
  data: Doctor[];
  dataState: DataState;
  isSubmitting: boolean;
  selected?: Doctor;
  isUpdateMode: boolean;
}

export const initialDoctorState: DoctorState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isUpdateMode: false,
};
