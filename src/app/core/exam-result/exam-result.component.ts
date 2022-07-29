import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamResult } from './models/exam-result.model';
import { ExamResultService } from './services/exam-result.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent implements OnInit {
  id!:any;
  name!:any;
  sessions$!: Observable<ExamResult[]>;

  constructor(private examResService: ExamResultService) { }

  ngOnInit(): void {
    this.sessions$ = this.examResService.getAll();
  }

  filMarck(classId:any,name:any ){
    this.id = classId;
    this.name = name;
  }

  dateTime(time: string) {
    return '2020-01-01 ' + time
  }

}
