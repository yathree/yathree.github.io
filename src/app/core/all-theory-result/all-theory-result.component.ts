import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllExamResult } from './models/all-exam-result.model';
import { AllExamResultService } from './services/all-exam-result.service';

@Component({
  selector: 'app-all-theory-result',
  templateUrl: './all-theory-result.component.html',
  styleUrls: ['./all-theory-result.component.scss']
})
export class AllTheoryResultComponent implements OnInit {

  sessions$!: Observable<AllExamResult[]>;

  constructor(private examResService: AllExamResultService) { }

  ngOnInit(): void {
    this.sessions$ = this.examResService.getAll();
  }

}
