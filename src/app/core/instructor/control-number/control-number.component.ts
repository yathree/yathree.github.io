import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-control-number',
  templateUrl: './control-number.component.html',
  styleUrls: ['./control-number.component.scss']
})
export class ControlNumberComponent implements OnInit {
  DataState = DataState;

  a=true;
  b=false;
  c=false;
  d=false;
  e=false;

  // students$ = this.studentService.getAllStudents()
  //   .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private studentService: InstructorService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
  }

  onClass(status:any){

    if (status=="A"){
      this.a=true;
      this.b=false;
      this.c=false;
      this.d=false;
      this.e=false;
    }else if (status=="B"){
      this.b=true;
      this.a=false;
      this.c=false;
      this.d=false;
      this.e=false;
    }
    else if (status=="C"){
      this.b=false;
      this.a=false;
      this.c=true;
      this.d=false;
      this.e=false;
    }
    else if (status=="D"){
      this.b=false;
      this.a=false;
      this.c=false;
      this.d=true;
      this.e=false;
    }
    else if (status=="E"){
      this.b=false;
      this.a=false;
      this.c=false;
      this.d=false;
      this.e=true;
    }

}
}
