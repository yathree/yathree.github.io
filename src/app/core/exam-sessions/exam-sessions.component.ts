import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamSession } from './models/exam-session.model';
import { ExamSessionService } from './services/exam-session.service';

@Component({
  selector: 'app-exam-sessions',
  templateUrl: './exam-sessions.component.html',
  styleUrls: ['./exam-sessions.component.scss']
})
export class ExamSessionsComponent implements OnInit {
  sessions$!: Observable<ExamSession[]>;

  constructor(private examSesService: ExamSessionService) { }

  ngOnInit(): void {
    this.sessions$ = this.examSesService.getAll();
  }

  dateTime(time: string) {
    return '2020-01-01 ' + time
  }
}
