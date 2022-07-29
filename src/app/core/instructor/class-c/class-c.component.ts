import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { InstructorService } from '@app/shared/services';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-class-c',
  templateUrl: './class-c.component.html',
  styleUrls: ['./class-c.component.scss']
})
export class ClassCComponent implements OnInit {
  DataState = DataState;

  students$ = this.studentService.getAllStudentsC()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  constructor(
    private studentService: InstructorService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  
  onControl(classId: number,className: string) {

    let  classCode;

    if (className=="A"){
      classCode = "CLASS_A";
    }else if(className=="B1"){
      classCode = "CLASS_B1";
    }else if(className=="B"){
      classCode = "CLASS_B";
    }else if(className=="D1"){
      classCode = "CLASS_D1";
    }else if(className=="D"){
      classCode = "CLASS_D";
    }else if(className=="C"){
      classCode = "CLASS_C";
    }else if(className=="C1"){
      classCode = "CLASS_C1";
    }else if(className=="E"){
      classCode = "CLASS_E";
    }else if(className=="G"){
      classCode = "CLASS_G";
    }else if(className=="M"){
      classCode = "CLASS_M";
    }
    this.studentService.controlNumber(classId,classCode).subscribe((res:any)=>{
      this.snackbar.create('Your Control Number has Been Create.')
    });
  }


}
