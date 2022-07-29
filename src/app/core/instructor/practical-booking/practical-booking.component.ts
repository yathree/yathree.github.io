import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-practical-booking',
  templateUrl: './practical-booking.component.html',
  styleUrls: ['./practical-booking.component.scss']
})
export class PracticalBookingComponent implements OnInit {
  DataState = DataState;

  students$ = this.studentService.getPracticalBooking()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private studentService: InstructorService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  
  }