import { DataState } from '@app/shared/enums/dataState';
import { DrivingLicenseClass } from '@app/shared/models/driving-class.model';

export interface DrivingLicenseClassState {
  data: DrivingLicenseClass[];
  dataState: DataState;
  isSubmitting: boolean;
  isSubmitted: boolean;
  selected?: DrivingLicenseClass;
  isUpdateMode: boolean;
}

export const initialDrivingLicenseClassState: DrivingLicenseClassState = {
  data: [],
  dataState: DataState.LOADED,
  isSubmitting: false,
  isSubmitted: false,
  isUpdateMode: false,
};
