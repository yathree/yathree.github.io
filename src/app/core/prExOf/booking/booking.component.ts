import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  id!:any;
  name!:any;

  DataState = DataState;
  school:any;
  ids = 1;


  students$ = this.practicalServices.getStudentBook()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private practicalServices: PracticalExam,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    
  }

}
