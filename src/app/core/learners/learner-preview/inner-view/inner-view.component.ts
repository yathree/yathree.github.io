import { AnimationStyleMetadata } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Learner } from '@app/shared/models/learner.model';
import { Student } from '@app/shared/models/student.mode';
import { LearnerService } from '@app/shared/services/learner.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'inner-view',
  templateUrl: './inner-view.component.html',
  styleUrls: ['./inner-view.component.scss'],
})
export class InnerViewComponent implements OnInit {
  learners$!: Observable<Learner[]>;
  @Input() id: any;

  constructor(
    private learnerService: LearnerService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.learners$ = this.learnerService.getStudentsLearner(this.id);
  }
}
