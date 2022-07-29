import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '@app/shared/models/student.mode';
import { DoctorService } from '@app/shared/services/doctor.service';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

@Component({
  selector: 'paid-students',
  templateUrl: './paid-students.component.html',
  styleUrls: ['./paid-students.component.scss'],
})
export class PaidStudentsComponent implements OnInit {
  students$!: Observable<Student[]>;
  SelectionType = SelectionType;

  constructor(private doctorService: DoctorService, private route: Router) {}

  ngOnInit(): void {
    this.students$ = this.doctorService.getPaidStudents();
  }

  onSelect(selected: Student) {
    this.route.navigate(['medical-checkup'], {
      queryParams: { id: selected.idNumber },
    });
  }
}
