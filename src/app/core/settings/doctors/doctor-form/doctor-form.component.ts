import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { flatHospital } from '../../hospitals/state/hospital.selectors';
import { addDoctor } from '../state/doctor.actions';

@Component({
  selector: 'doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss'],
})
export class DoctorFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  hospitals$ = this.store.select(flatHospital);
  subs$!: Subscription;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fname: [null, Validators.required],
      mname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      hospital: '',
    });
  }

  onSave() {
    this.store.dispatch(addDoctor(this.form.value));
  }

  ngOnDestroy(): void {
    this.subs$ && this.subs$.unsubscribe();
  }
}
