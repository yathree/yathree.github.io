import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, take, tap } from 'rxjs/operators';
import { Student } from '@shared/models/student.mode';
import { StudentsService } from '@shared/services/students.service';
import { RestrictionService } from '@app/shared/services/restriction.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-checkup',
  templateUrl: './medical-checkup.component.html',
  styleUrls: ['./medical-checkup.component.scss'],
})
export class MedicalCheckupComponent implements OnInit {
  students$!: Observable<any>;
  selectedStudent!: Observable<Student>;
  form!: FormGroup;
  searchControl = new FormControl();
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  restrictions$ = this.restrictionService.getAll();
  queryId = '';

  constructor(
    private studentService: StudentsService,
    private restrictionService: RestrictionService,
    private snackbar: SnackbarService,
    private activatedRoute: ActivatedRoute
  ) {
    this.queryId = this.activatedRoute.snapshot.queryParams['id'];
  }

  ngOnInit(): void {
    this.queryId && this.onSearch();

    this.form = new FormGroup({
      bloodGroup: new FormControl(null, [Validators.required]),
      restrictions: new FormControl(null),
      comment: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
  }

  onSearch() {
    const identity = this.searchControl.value
      ? this.searchControl.value
      : this.queryId;
    if (!identity) return;

    this.students$ = this.studentService.students$(identity).pipe(
      map((student) => ({ loading: false, data: student })),
      startWith({ loading: true }),
      catchError(() => of({ loading: false }))
    );
  }

  onSubmit(student: Student) {
    this.studentService
      .submitHealthInfo({
        ...this.form.value,
        student,
        paymentId: student['paymentId'],
      })
      .pipe(
        take(1),
        tap(() => {
          this.snackbar.create('Helth info submitted');
          this.form.reset();
        })
      )
      .subscribe();
  }
}
