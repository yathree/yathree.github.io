import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { map } from 'rxjs';

@Component({
  selector: 'app-registed-students',
  templateUrl: './registed-students.component.html',
  styleUrls: ['./registed-students.component.scss']
})
export class RegistedStudentsComponent implements OnInit {
  DataState = DataState;

  constructor(private studentService: InstructorService,) { }

  students$ = this.studentService.getAllStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));
    

  ngOnInit(): void {
    this.students$.subscribe()
  }

}
