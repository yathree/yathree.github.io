import { School } from './school.model';

export interface Instructor {
  id?: number | string;
  fname: string;
  lname: string;
  gender: string;
  phone: string;
  email: string;
  school_id?: number;
  school?: School;
}
