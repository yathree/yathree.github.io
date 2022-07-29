import { Component, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { StudentsService } from '@app/shared/services/students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paid-students',
  templateUrl: './paid-students.component.html',
  styleUrls: ['./paid-students.component.scss'],
})
export class PaidStudentsComponent implements OnInit {
  students$!: Observable<Student[]>;

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.getPaidStudents();
  }
}
