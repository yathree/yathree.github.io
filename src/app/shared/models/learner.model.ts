import { Restriction } from './restriction.model';

export interface Learner {
  id: number;
  name: string;
  issueDate: string;
  expiryDate: string;
  status: string;
  className: string;
  dob: string;
  classId?:Number;
  restrictions: Restriction[];
}
