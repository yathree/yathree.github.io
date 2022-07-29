import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent implements OnInit {

  @Input() classId: any;
  @Input() name: any;
  @Input() api?: any;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private practivalService: PracticalExam,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      classId: ['', Validators.required],
      marks: ['', Validators.required],
      recommendation: ['', Validators.required],
    });
  }

  onSave() {
    this.form.patchValue({
      classId: this.classId,
      marks:  this.form.value.marks,
      recommendation:  this.form.value.recommendation,
    })
    const value = this.form.value;
    
    this.practivalService
      .add({ ...value}, this.api )
      .subscribe(() => {
        this.snackbar.create('Exam Result has been saved.');
        this.form.reset();
      });
  }

}
