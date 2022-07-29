import { Component } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { Store } from '@ngrx/store';
import { Staff } from '@shared/models/staffs.model';
import { selectStaff } from './state/staff.actions';
import { staffState } from './state/staff.selectors';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  staffState$ = this.store.select(staffState);
  DatState = DataState;

  constructor(private store: Store) {}

  onUpdateClicked(staff: Staff): void {
    this.store.dispatch(selectStaff({ staff }));
  }
}
