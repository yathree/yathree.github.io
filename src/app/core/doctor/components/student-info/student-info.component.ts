import { Component, Input, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';

@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  @Input() student!: Student;

  constructor() {}

  ngOnInit(): void {
    console.log(this.student)
  }
}
