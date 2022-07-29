import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-road-check-result',
  templateUrl: './road-check-result.component.html',
  styleUrls: ['./road-check-result.component.scss']
})
export class RoadCheckResultComponent implements OnInit {
  id!:any;
  name!:any;
  api='roadCheck-result';

  DataState = DataState;

  students$ = this.practivalService.getRoad()
  .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private practivalService: PracticalExam,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onResult(id:any,name:any){
    this.id = id;
    this.name = name;
  }

}
