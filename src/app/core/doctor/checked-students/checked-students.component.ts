import { Component, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { DoctorService } from '@app/shared/services/doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checked-students',
  templateUrl: './checked-students.component.html',
  styleUrls: ['./checked-students.component.scss']
})
export class CheckedStudentsComponent implements OnInit {
  students$!: Observable<Student[]>;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.students$ = this.doctorService.getCheckedStudents();
  }

}
