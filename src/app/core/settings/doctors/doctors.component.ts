import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { Store } from '@ngrx/store';
import { loadDoctors } from './state/doctor.actions';
import { doctorSelector } from './state/doctor.selectors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  DataState = DataState;
  doctorState$ = this.store.select(doctorSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDoctors());
  }
}
