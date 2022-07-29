import { DataState } from '@shared/enums/dataState';
import { PaymentStructure } from './payment-structure';

export interface PaymentStructureState {
  dataState: DataState;
  data?: PaymentStructure[];
}
