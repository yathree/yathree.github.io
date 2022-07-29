import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataState } from '@app/shared/enums/dataState';
import { Restriction } from '@app/shared/models';
import { AppState } from '@app/shared/models/app-state.model';
import { RestrictionService } from '@app/shared/services/restriction.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.scss'],
})
export class RestrictionsComponent implements OnInit {
  form!: FormGroup;
  restrictionState$!: Observable<AppState<Restriction>>;
  restrictionSubject = new BehaviorSubject<Restriction[]>([]);
  submittingSubject = new BehaviorSubject<boolean>(false);
  isSubmitting$ = this.submittingSubject.asObservable();
  updateModeSubject = new BehaviorSubject<boolean>(false);
  updateMode$ = this.updateModeSubject.asObservable();
  DataState = DataState;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private restrictionService: RestrictionService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.restrictionState$ = this.restrictionService.getAll().pipe(
      map((response) => {
        this.restrictionSubject.next(response);
        return { dataState: DataState.LOADED, data: response };
      }),
      startWith({ dataState: DataState.LOADING }),
      catchError(() => of({ dataState: DataState.LOADED }))
    );
  }

  onSave() {
    this.submittingSubject.next(true);
    this.restrictionState$ = this.restrictionService.save(this.form.value).pipe(
      map((response) => {
        this.snackbar.create('Restriction has been registered!');
        this.restrictionSubject.next([
          response,
          ...this.restrictionSubject.value,
        ]);
        this.submittingSubject.next(false);
        this.form.reset();
        return {
          dataState: DataState.LOADED,
          data: this.restrictionSubject.value,
        };
      }),
      startWith({
        dataState: DataState.LOADED,
        data: this.restrictionSubject.value,
      })
    );
  }

  onUpdate() {
    this.submittingSubject.next(true);
    this.restrictionState$ = this.restrictionService
      .update(this.form.value)
      .pipe(
        map((response) => {
          const index = this.restrictionSubject.value.findIndex(
            (restriction) => restriction.id === response.id
          );
          this.restrictionSubject.value[index] = response;
          this.snackbar.create('Restriction has been updated!');
          this.onCancel();
          this.submittingSubject.next(false);
          return {
            dataState: DataState.LOADED,
            data: [...this.restrictionSubject.value],
          };
        }),
        startWith({
          dataState: DataState.LOADED,
          data: this.restrictionSubject.value,
        })
      );
  }

  onUpdateClicked(restriction: Restriction): void {
    this.updateModeSubject.next(true);
    this.form.addControl('id', this.fb.control(''));

    this.form.patchValue({
      id: restriction.id,
      code: restriction.code,
      description: restriction.description,
    });
  }

  onCancel(): void {
    this.updateModeSubject.next(false);
    this.form.removeControl('id');
    this.form.reset();
  }
}
