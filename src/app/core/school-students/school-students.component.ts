import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '@app/shared/models/student.mode';
import { StudentsService } from '@app/shared/services/students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-school-students',
  templateUrl: './school-students.component.html',
  styleUrls: ['./school-students.component.scss'],
})
export class SchoolStudentsComponent implements OnInit {
  students$!: Observable<Student[]>;
  schoolId: number;

  constructor(
    private studentService: StudentsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.schoolId = this.activatedRoute.snapshot.params['schoolId'];
  }

  ngOnInit(): void {
    this.students$ = this.studentService.getStudentsBySchool(this.schoolId);
  }
}
