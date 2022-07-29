import { Component, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { StudentsService } from '@app/shared/services/students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checked-students',
  templateUrl: './checked-students.component.html',
  styleUrls: ['./checked-students.component.scss'],
})
export class CheckedStudentsComponent implements OnInit {
  students$!: Observable<Student[]>;

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.getCheckedStudents();
  }
}
