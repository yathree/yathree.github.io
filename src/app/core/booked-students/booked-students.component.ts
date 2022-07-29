import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Student } from '@app/shared/models/student.mode';
import { Observable } from 'rxjs';
import { BookedStudentService } from './services/booked-students.service';

@Component({
  selector: 'app-booked-students',
  templateUrl: './booked-students.component.html',
  styleUrls: ['./booked-students.component.scss'],
})
export class BookedStudentsComponent implements OnInit {
  dateCtrl = new FormControl('', [Validators.required]);
  students$!: Observable<Student[]>;

  constructor(private bookedStdService: BookedStudentService) {}

  ngOnInit(): void {
    this.students$ = this.bookedStdService.getAll();
  }

  onSearch() {
    this.students$ = this.bookedStdService.getByDate(this.dateCtrl.value);
  }

  dateTime(time: string) {
    return '2020-01-01 ' + time;
  }
}
