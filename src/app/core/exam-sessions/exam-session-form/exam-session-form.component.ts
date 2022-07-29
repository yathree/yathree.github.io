import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ExamSessionService } from '../services/exam-session.service';

@Component({
  selector: 'exam-session-form',
  templateUrl: './exam-session-form.component.html',
  styleUrls: ['./exam-session-form.component.scss'],
})
export class ExamSessionFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sessionService: ExamSessionService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      capacity: ['', Validators.required],
    });
  }

  onSave() {
    const value = this.form.value;
    this.sessionService
      .add({ ...value, startTime: value.startTime + ':00' })
      .subscribe(() => this.snackbar.create('Exam schedule has been created.'));
  }
}
