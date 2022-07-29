import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { addStaff, cancelStaffUpdate, updateStaff } from '../state/staff.actions';
import { isStaffSubmitting, isUpdateMode, selectedStaff } from '../state/staff.selectors';

@Component({
  selector: 'staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss'],
})
export class StaffFormComponent implements OnInit {
  isSubmitting$ = this.store.select(isStaffSubmitting);
  updateMode$ = this.store.select(isUpdateMode);
  selectedStaff$ = this.store.select(selectedStaff);
  form!: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private service: StaffService
  ) {}

  roles$ = this.service.roles$;

  ngOnInit(): void {
    this.initializeForm();
    
    this.selectedStaff$.subscribe(staff => {
      if(staff) {
        this.form.patchValue({
          fname: staff.fname,
          mname: staff.mname,
          lname: staff.lname,
          gender: staff.gender,
          phone: staff.phone,
          email: staff.email,
          role: staff.role,
        });
        this.form.updateValueAndValidity();
      }
    })
  }

  initializeForm() {
    this.form = this.fb.group({
      fname: [null, Validators.required],
      mname: [null, Validators.required],
      lname: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      email: '',
      role: ['', Validators.required],
    });
  }

  onSave() {
    this.store.dispatch(addStaff(this.form.value));
    this.form.reset();
  }

  onUpdate() {
    this.store.dispatch(updateStaff(this.form.value));
  }

  onCancel(): void {
    this.store.dispatch(cancelStaffUpdate());
    this.form.reset();
  }
}
