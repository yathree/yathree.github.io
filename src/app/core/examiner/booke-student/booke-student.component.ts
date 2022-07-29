import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-booke-student',
  templateUrl: './booke-student.component.html',
  styleUrls: ['./booke-student.component.scss']
})
export class BookeStudentComponent implements OnInit {
  DataState = DataState;

  students$ = this.practivalService.getBookedStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private practivalService: PracticalExam,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

}
