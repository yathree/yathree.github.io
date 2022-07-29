import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@app/shared/enums/dataState';
import { Manager } from '@app/shared/models/manager.model';
import { Store } from '@ngrx/store';
import { addManager, cancelManagerUpdate, selectManager, updateManager } from './state/manager.actions';
import { managerState, managerSubmitSelector, updateModeSelector } from './state/manager.selectors';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss'],
})
export class ManagersComponent implements OnInit {
  managersState$ = this.store.select(managerState)
  isSubmitting$ = this.store.select(managerSubmitSelector);
  updateMode$ = this.store.select(updateModeSelector);
  DatState = DataState;
  form!: FormGroup;

  constructor(private fb: FormBuilder,private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      fname: [null, Validators.required],
      mname: [null, Validators.required],
      lname: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      email: '',
    });
  }

  onSave() {
    this.store.dispatch(addManager(this.form.value))
  }

  onUpdate() {
    this.store.dispatch(updateManager(this.form.value))
  }

  onUpdateClicked(manager: Manager): void {
    this.form.addControl('id', this.fb.control(''));
    this.store.dispatch(selectManager({manager}));

    this.form.patchValue({
      id: manager.id,
      fname: manager.fname,
      mname: manager.mname,
      lname: manager.lname,
      gender: manager.gender,
      phone: manager.phone,
      email: manager.email,
    });
  }

  onCancel(): void {
    this.store.dispatch(cancelManagerUpdate());
    this.form.removeControl('id');
    this.form.reset();
  }
}
