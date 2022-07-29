import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ExamResultService } from '../services/exam-result.service';

@Component({
  selector: 'app-exam-result-form',
  templateUrl: './exam-result-form.component.html',
  styleUrls: ['./exam-result-form.component.scss']
})
export class ExamResultFormComponent implements OnInit {

  @Input() classId: any;
  @Input() name: any;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resultService: ExamResultService,
    private snackbar: SnackbarService
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      classId: ['', Validators.required],
      marks1: ['', Validators.required],
      marks2: ['', Validators.required],
    });
  }

  onSave() {
    this.form.patchValue({
      classId: this.classId,
      marks1:  this.form.value.marks1,
      marks2:  this.form.value.marks2,
    })
    const value = this.form.value;
    
    this.resultService
      .add({ ...value, startTime: value.startTime + ':00' })
      .subscribe(() => this.snackbar.create('Exam Result has been saved.'));
      
  }

}
