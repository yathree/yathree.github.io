import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { flatLicenseClassState } from '@app/core/settings/driving-license-classes/state/classes.selectors';
import { DataState } from '@app/shared/enums/dataState';
import { ManagerService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-row-students',
  templateUrl: './row-students.component.html',
  styleUrls: ['./row-students.component.scss'],
})
export class RowStudentsComponent implements OnInit {
  DataState = DataState;
  classIdCtrl = new FormControl('');
  editMode = false;
  drivingClasses$ = this.store.select(flatLicenseClassState);

  constructor(private managerService: ManagerService, private store: Store) {}

  students$ = this.managerService
    .getRowStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  ngOnInit(): void {
    this.students$.subscribe();
  }

  onEditAttempt() {
    this.editMode = true;
  }

  cancelEditMode() {
    this.editMode = false;
  }

  onAssignClass(studentId: string) {
    const classId = this.classIdCtrl.value;
    if (!classId) return;

    this.managerService
      .assignClass({ studentId, drivingClassId: classId })
      .subscribe((res) => {
        this.classIdCtrl.reset();
      });
  }
}
