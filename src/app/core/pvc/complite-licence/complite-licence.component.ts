import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { PvcService } from '@app/shared/services/pvc.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-complite-licence',
  templateUrl: './complite-licence.component.html',
  styleUrls: ['./complite-licence.component.scss']
})
export class CompliteLicenceComponent implements OnInit {
  DataState = DataState;

  constructor(private licences:PvcService) { }

  students$ = this.licences.getAllStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  ngOnInit(): void {
  }

}
