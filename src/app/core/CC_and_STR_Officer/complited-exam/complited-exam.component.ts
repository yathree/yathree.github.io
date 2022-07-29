import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { CcService } from '@app/shared/services/cc.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-complited-exam',
  templateUrl: './complited-exam.component.html',
  styleUrls: ['./complited-exam.component.scss']
})
export class ComplitedExamComponent implements OnInit {
  id!:any;
  name!:any;
  
  DataState = DataState;

  constructor(private licences: CcService,) { }

  students$ = this.licences.getAllStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));
    

  ngOnInit(): void {
    this.students$.subscribe()
  }

  confirm(id:any, name:any){
    this.id= id;
    this.name = name;
  }

}
