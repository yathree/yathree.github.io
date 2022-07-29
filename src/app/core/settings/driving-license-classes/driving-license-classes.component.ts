import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@app/shared/enums/dataState';
import { DrivingLicenseClass } from '@app/shared/models/driving-class.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  addLicenseClass,
  cancelLicenseClassEdit,
  selectLicenseClass,
  updateLicenseClass,
} from './state/classes.actions';
import {
  isLicenseClassStateSubmitted,
  isLicenseClassStateSubmitting,
  licenseClassState,
  licenseClassStateEditMode,
} from './state/classes.selectors';

@Component({
  selector: 'app-driving-license-classes',
  templateUrl: './driving-license-classes.component.html',
  styleUrls: ['./driving-license-classes.component.scss'],
})
export class DrivingLicenseClassesComponent implements OnInit, OnDestroy {
  licenseClassState$ = this.store.select(licenseClassState);
  updateMode$ = this.store.select(licenseClassStateEditMode);
  isSubmitting$ = this.store.select(isLicenseClassStateSubmitting);
  isSubmitted$ = this.store.select(isLicenseClassStateSubmitted);
  subscription$!: Subscription;

  form!: FormGroup;
  DataState = DataState;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.isSubmitted$.subscribe((submitted) => {
      if (submitted) this.form.reset();
    });
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      className: new FormControl(null, [Validators.required]),
      ageAllowed: new FormControl(null, [Validators.required]),
      description: new FormControl(''),
    });
  }

  saveLicenseClass() {
    this.store.dispatch(addLicenseClass(this.form.value));
  }

  onUpdate() {
    this.store.dispatch(updateLicenseClass(this.form.value));
  }

  onUpdateClicked(licenseClass: DrivingLicenseClass): void {
    this.store.dispatch(selectLicenseClass({ licenseClass }));

    this.form.setValue({
      id: licenseClass.id,
      className: licenseClass.className,
      ageAllowed: licenseClass.ageAllowed,
      description: licenseClass.description,
    });
  }

  onCancel(): void {
    this.store.dispatch(cancelLicenseClassEdit());
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }
}
