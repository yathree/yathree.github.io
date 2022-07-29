import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {
  id: any;
  form!: FormGroup;
  
  constructor(
    private managerService: ManagerService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      plateNumber: ['', Validators.required],
    })
  }

  onSave() {
    this.form.patchValue({
      id: this.id,
      plateNumber:  this.form.value.plateNumber,
    })
    const value = this.form.value;
    console.log(value)
    
    // this.managerService
    //   .confirm({ ...value, startTime: value.startTime + ':00' })
    //   .subscribe(() => this.snackbar.create('Exam Result has been saved.'));
      
  }
}
