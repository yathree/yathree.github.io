import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { DataState } from '@shared/enums/dataState';
import { SnackbarService } from '@shared/services/snackbar.service';
import { PaymentStructure } from './models/payment-structure';
import { PaymentStructureState } from './models/payment-structure-state';
import { PaymentStructureService } from './services/payment-structure.service';

@Component({
  selector: 'app-payment-structure',
  templateUrl: './payment-structure.component.html',
  styleUrls: ['./payment-structure.component.scss'],
})
export class PaymentStructureComponent implements OnInit {
  paymentState$!: Observable<PaymentStructureState>;
  paymentSubject = new BehaviorSubject<PaymentStructure[]>([]);
  private updateModeSubject = new BehaviorSubject<boolean>(false);
  updateMode$ = this.updateModeSubject.asObservable();
  private isUpdatingSubject = new BehaviorSubject<boolean>(false);
  isUpdating$ = this.isUpdatingSubject.asObservable();
  form!: FormGroup;
  DataState = DataState;
  id!: number | undefined;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentStructureService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      code: '',
    });

    this.paymentState$ = this.paymentService.getAll().pipe(
      map((response) => {
        this.paymentSubject.next(response);
        return { dataState: DataState.LOADED, data: response.reverse() };
      }),
      startWith({ dataState: DataState.LOADING }),
      catchError(() => of({ dataState: DataState.LOADED }))
    );
  }

  onUpdate() {
    this.isUpdatingSubject.next(true);
    const updated = { ...this.form.value, id: this.id };
    this.paymentState$ = this.paymentService.update(updated).pipe(
      map(() => {
        const index = this.paymentSubject.value.findIndex(
          (payment) => payment.id === this.id
        );
        this.paymentSubject.value[index] = updated;
        this.snackbar.create('Payment structure has been updated!');
        this.form.reset();
        this.updateModeSubject.next(false);
        this.isUpdatingSubject.next(false);
        return {
          dataState: DataState.LOADED,
          data: [...this.paymentSubject.value],
        };
      }),
      startWith({
        dataState: DataState.LOADED,
        data: this.paymentSubject.value,
      })
    );
  }

  onUpdateClicked(payment: PaymentStructure): void {
    this.updateModeSubject.next(true);
    this.id = payment.id;

    this.form.patchValue({
      name: payment.name,
      amount: payment.amount,
      code: payment.code,
    });
  }

  onCancel(): void {
    this.updateModeSubject.next(false);
    this.form.reset();
  }
}
