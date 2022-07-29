import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { ManagerService } from '@app/shared/services';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  id!:any;
  name!:any;

  DataState = DataState;
  school:any;
  ids = 1;


  students$ = this.managerService.getCars()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private managerService: ManagerService,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    
  }
  
  onConfirm(id: number,className: string) {

    this.id = id;
    this.name = className;
    console.log(id)
  }

}
