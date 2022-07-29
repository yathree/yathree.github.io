import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})
export class ConfirmBookingComponent implements OnInit {
  DataState = DataState;

  students$ = this.studentService.getConfirmedBooking()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private studentService: InstructorService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

}
