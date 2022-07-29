import { Manager } from './manager.model';

export interface School {
  id?: number | string;
  name: string;
  contact: string;
  location: string;
  manager: Manager;
  practicalDay:string;
  
  [key: string]: any;
}
