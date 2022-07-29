import { Component, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { StudentsService } from '@app/shared/services/students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  students$!: Observable<Student[]>;

  constructor(private studentService: StudentsService) { }
  

  ngOnInit(): void {
    this.students$ = this.studentService.getPaymentStudents();
  }

}
