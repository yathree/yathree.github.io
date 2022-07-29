import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { PracticalExam } from '@app/shared/services/practicalExam.services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pre-check-result',
  templateUrl: './pre-check-result.component.html',
  styleUrls: ['./pre-check-result.component.scss']
})
export class PreCheckResultComponent implements OnInit {

  id!:any;
  name!:any;
  api='preCheck-result';

  DataState = DataState;

  students$ = this.practivalService.getPre()
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
