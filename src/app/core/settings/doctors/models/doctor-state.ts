import { DataState } from '@shared/enums/dataState';
import { Doctor } from './doctor.model';

export interface DoctorState {
  dataState: DataState;
  data?: Doctor[];
}
