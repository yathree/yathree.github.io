import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@app/shared/enums/dataState';
import { Instructor } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { schoolListSelector } from '../schools/state/school.selectors';
import {
  addInstructor,
  cancelInstructorUpdate,
  selectInstructor,
  updateInstructor,
} from './state/instructor.actions';
import {
  instructorSelector,
  instructorSubmitSelector,
  updateModeSelector,
} from './state/instructor.selectors';

@Component({
  selector: 'app-instactors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss'],
})
export class InstactorsComponent implements OnInit, OnDestroy {
  schools$ = this.store.select(schoolListSelector);
  instructorState$ = this.store.select(instructorSelector);
  isSubmitting$ = this.store.select(instructorSubmitSelector);
  updateMode$ = this.store.select(updateModeSelector);
  subscription$!: Subscription;
  DatState = DataState;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      email: '',
      school: null,
    });
  }

  onSave() {
    this.store.dispatch(addInstructor(this.form.value));
  }

  onUpdate() {
    this.store.dispatch(updateInstructor(this.form.value));
  }

  onUpdateClicked(instructor: Instructor): void {
    this.form.addControl('id', this.fb.control(''));
    this.subscription$ = this.schools$.subscribe((schools) => {
      const selectedSchool = schools.find(
        (s) => s.id === instructor.school?.id
      );
      this.form.patchValue({
        id: instructor.id,
        fname: instructor.fname,
        lname: instructor.lname,
        gender: instructor.gender,
        phone: instructor.phone,
        email: instructor.email,
        school: selectedSchool,
      });
      this.form.updateValueAndValidity();
      this.store.dispatch(selectInstructor({ instructor }));
    });
  }

  onCancel(): void {
    this.store.dispatch(cancelInstructorUpdate());
    this.form.removeControl('id');
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }
}
