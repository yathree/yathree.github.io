import { Hospital } from '@shared/models/hospital.model';

export interface Doctor {
  id?: number | string;
  fname: string;
  lname: string;
  gender: string;
  phone: string;
  hospital: Hospital;
}
