import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ManagerService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { addSchool, cancelUpdate, updateSchool } from '../state/school.actions';
import {
  schoolSubmitSelector,
  selectedSchoolSelector,
  updateModeSelector,
} from '../state/school.selectors';

@Component({
  selector: 'school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
})
export class SchoolFormComponent implements OnInit {
  schoolForm!: FormGroup;
  isSubmitting$ = this.store.select(schoolSubmitSelector);
  managers$ = this.managerService.getAll();
  selectedSchool$ = this.store.select(selectedSchoolSelector);
  isUpdateMode$ = this.store.select(updateModeSelector);

  constructor(private managerService: ManagerService, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setFormValues();

    this.managers$.subscribe(console.log);
  }

  initializeForm() {
    this.schoolForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
      practicalDay:  new FormControl(null, [Validators.required]),
      manager: new FormControl(null),
    });
  }

  setFormValues() {
    combineLatest([this.selectedSchool$, this.managers$]).subscribe(
      ([school, managers]) => {
        if (school) {
          this.schoolForm.addControl('id', new FormControl(''));
          const manager = managers.find(
            (m) => m.phone === school.manager.phone
          );

          this.schoolForm.patchValue({
            id: school.id,
            name: school.name,
            location: school.location,
            contact: school.contact,
            practicalDay: school.practicalDay,
            manager: manager,
          });

          this.schoolForm.updateValueAndValidity();
        }
      }
    );
  }

  addSchool() {
    // console.log(this.schoolForm.value);
    this.store.dispatch(addSchool(this.schoolForm.value));
  }

  updateSchool() {
    this.store.dispatch(updateSchool(this.schoolForm.value));
  }

  cancelEdit() {
    this.store.dispatch(cancelUpdate())
    this.schoolForm.reset();
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.schoolForm.controls;
  }
}
