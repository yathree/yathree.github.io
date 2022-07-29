import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@shared/enums/dataState';
import { Hospital } from '@shared/models/hospital.model';
import { Option } from '@shared/models/option.model';
import { Store } from '@ngrx/store';
import { hospitalEditMode, hospitalState, isHospitalSubmitted, isHospitalSubmitting } from './state/hospital.selectors';
import { addHospital, cancelHospitalEdit, selectHospital, updateHospital } from './state/hospital.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit, OnDestroy {
  hospitalState$ = this.store.select(hospitalState);
  updateMode$ = this.store.select(hospitalEditMode);
  isSubmitting$ = this.store.select(isHospitalSubmitting);
  isSubmitted$ = this.store.select(isHospitalSubmitted);
  subscription$!: Subscription;

  form!: FormGroup;
  islands: Option[] = [];
  DataState = DataState;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.isSubmitted$.subscribe(submitted => {
      if(submitted) this.form.reset();
    })

    this.islands = [
      { label: 'Unguja', value: 'Unguja' },
      { label: 'Pemba', value: 'Pemba' },
    ];
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      status: new FormControl('Active'),
    });
  }

  addHospital() {
    this.store.dispatch(addHospital(this.form.value));
  }

  onUpdate() {
    this.store.dispatch(updateHospital(this.form.value));
  }

  onUpdateClicked(hospital: Hospital): void {
    this.store.dispatch(selectHospital({hospital}));
    
    this.form.setValue({
      id: hospital.id,
      name: hospital.name,
      location: hospital.location,
      status: hospital.status,
    });
  }

  onCancel(): void {
    this.store.dispatch(cancelHospitalEdit());
    this.form.reset();
  }

  ngOnDestroy(): void {
      this.subscription$ && this.subscription$.unsubscribe();
  }
}
