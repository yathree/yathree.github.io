import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamSessionsComponent } from './exam-sessions.component';
import { SharedModule } from '@app/shared/shared.module';
import { ExamSessionFormComponent } from './exam-session-form/exam-session-form.component';
import { ExamSessionService } from './services/exam-session.service';

@NgModule({
  declarations: [ExamSessionsComponent, ExamSessionFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamSessionsComponent,
      },
    ]),
    SharedModule
  ],
  exports: [],
  providers: [ExamSessionService],
})
export class ExamSessionsModule {}
