export interface Student {
  id?: number;
  fname: string;
  mname: string;
  lname: string;
  phone: string;
  address: string;
  idtype: string;
  idNumber: string;
  dob: string;
  email?: string;
  gender: string;
  className:string;
  classId?:number;
  paidMedical?: boolean;
  paidExam?: boolean;
  doctorComment?: DoctorComment;
  preMarks?:String;
  roadMarks?:String;
  yardMarks?:String;
  amountPaid?:String;
  controlNumber?:String;
  code?:string;
  
  [key: string]: any;
}

export type DoctorComment = 'FIT' | 'UNFIT';
