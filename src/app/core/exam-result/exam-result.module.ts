import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ExamResultFormComponent } from './exam-result-form/exam-result-form.component';
import { ExamResultComponent } from './exam-result.component';
import { ExamResultService } from './services/exam-result.service';

@NgModule({
  declarations: [
    ExamResultComponent,
    ExamResultFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamResultComponent,
      },
    ]),
    SharedModule
  ],
  exports: [],
  providers: [ExamResultService],
})
export class ExamResultModule {}
