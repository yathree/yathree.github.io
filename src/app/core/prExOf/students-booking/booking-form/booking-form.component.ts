import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input() id: any;
  @Input() name: any;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private practicalServices: PracticalExam,
    private snackbar: SnackbarService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      practicalDate: ['', Validators.required],
    })
  }

  onSave() {
    this.form.patchValue({
      id: this.id,
      practicalDate:  this.form.value.practicalDate,
    })
    const value = this.form.value;
    
    this.practicalServices
      .confirm({ ...value })
      .subscribe(() => this.snackbar.create('Exam Result has been saved.'));
      
  }
}
