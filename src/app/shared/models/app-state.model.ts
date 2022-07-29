import { DataState } from '../enums/dataState';

export interface AppState<T> {
  dataState: DataState;
  data?: T[] | T;
}
