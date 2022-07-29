import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Learner } from '@app/shared/models/learner.model';
import { Student } from '@app/shared/models/student.mode';
import { LearnerService } from '@app/shared/services/learner.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss'],
})
export class LearnersComponent implements OnInit {
  learners$!: Observable<Learner[]>;
  value!:any;
  data!:any;

  constructor(
    private learnerService: LearnerService,
    private snackbar: SnackbarService
    ) {}

  ngOnInit(): void {
    this.learners$ = this.learnerService.getStudents();
  }

  revokeLearner(id:any,status:any){
    this.data = {
      id:id,
      status:status
    }
    this.learnerService
      .revoke(this.data)
      .subscribe(() => this.snackbar.create('The Leaner has Been Revoke.'));
  }

  renewLearner(ClassId:any,id:any){
   this.value ={
      classId : ClassId,
      id : id
    }
    this.learnerService
      .renew(this.value)
      .subscribe(() => this.snackbar.create('Your Control Number has Been Create.'));
  }

}
