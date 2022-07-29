import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@shared/enums/dataState';
import { Car } from '@shared/models/car.model';
import { Option } from '@shared/models/option.model';
import { Store } from '@ngrx/store';
import { carEditMode, carState, isCarSubmitted, isCarSubmitting } from './state/car.selectors';
import { addCar, cancelCarEdit, selectCar, updateCar } from './state/car.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit,OnDestroy {
  carState$ = this.store.select(carState);
  updateMode$ = this.store.select(carEditMode);
  isSubmitting$ = this.store.select(isCarSubmitting);
  isSubmitted$ = this.store.select(isCarSubmitted);
  subscription$!: Subscription;

  form!: FormGroup;
  classes: Option[] = [];
  DataState = DataState;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.isSubmitted$.subscribe(submitted => {
      if(submitted) this.form.reset();
    })

    this.classes = [
      { label: 'Class M', value: 'Class M' },
      { label: 'Class A', value: 'Class A' },
      { label: 'Class B', value: 'Class B' },
      { label: 'Class B1', value: 'Class B1' },
      { label: 'Class C', value: 'Class C' },
      { label: 'Class C1', value: 'Class C1' },
      { label: 'Class D', value: 'Class D' },
      { label: 'Class D1', value: 'Class D1' },
      { label: 'Class E', value: 'Class E' },
      { label: 'Class G', value: 'Class G' },
    ];
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      carClass: new FormControl(null, [Validators.required]),
    });
  }

  addCar() {
    this.store.dispatch(addCar(this.form.value));
  }

  onUpdate() {
    this.store.dispatch(updateCar(this.form.value));
  }

  onUpdateClicked(car: Car): void {
    this.store.dispatch(selectCar({car}));
    
    this.form.setValue({
      id: car.id,
      carClass: car.carClass,
    });
  }

  onCancel(): void {
    this.store.dispatch(cancelCarEdit());
    this.form.reset();
  }

  ngOnDestroy(): void {
      this.subscription$ && this.subscription$.unsubscribe();
  }

}
