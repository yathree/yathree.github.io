import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { ManagerService } from '@app/shared/services';
import { AuthService } from '@app/shared/services/auth.service';
import { SchoolService } from '@app/shared/services/school.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'manager-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit {
  user = this.authService.user;
  DataState = DataState;

  schools$ = this.managerService.getManagerSchools()
    .pipe(
      map((schools) => {
        console.log(schools)
        return { dataState: DataState.LOADED, data: schools };
      }),
      startWith({ dataState: DataState.LOADING, data: [] })
    );

  constructor(
    private authService: AuthService,
    private managerService: ManagerService
  ) { }

  ngOnInit(): void { }
}
