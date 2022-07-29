import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '@app/shared/models/student.mode';
import { ManagerService } from '@app/shared/services';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  form!: FormGroup;

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      idtype: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required]),

      fname: new FormControl('', [Validators.required]),
      mname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  isValid() {
    const constrols = this.form.controls;
    return constrols['idtype'].valid && constrols['idNumber'].valid;
  }

  submit() {
    this.managerService
      .addStudent(this.form.value)
      .pipe(take(1))
      .subscribe(console.log);
  }

  getInfo() {
    const values = this.form.value;
    if (!values.idtype || !values.idNumber) return;

    this.managerService
      .getInfoById(values.idtype, values.idNumber)
      .pipe(take(1))
      .subscribe((response) => {
        localStorage.setItem('temp_info', JSON.stringify(response));
        this._setvalues(response, values.idtype);
      });
  }

  private _setvalues(student: Student, idtype: string) {
    this.form.patchValue({
      idtype: idtype,
      idNumber: student.idNumber,

      fname: student.fname,
      mname: student.mname,
      lname: student.lname,
      dob: student.dob,
      email: student.email,
      phone: student.phone,
      gender: student.gender,
      address: student.address,
    });

    this.form.updateValueAndValidity();
  }
}
