import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { DemeritService } from '@app/shared/services/demerit.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-student-license',
  templateUrl: './student-license.component.html',
  styleUrls: ['./student-license.component.scss']
})
export class StudentLicenseComponent implements OnInit {
  DataState = DataState;

  students$ = this.licences.getAllStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(private licences: DemeritService) { }

  ngOnInit(): void {
    this.students$.subscribe()
  }

}
