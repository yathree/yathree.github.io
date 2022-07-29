import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { AllTheoryResultComponent } from './all-theory-result.component';
import { AllExamResultService } from './services/all-exam-result.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllTheoryResultComponent,
      },
    ]),
    SharedModule
  ],
  exports: [],
  providers: [AllExamResultService],
})
export class AllExamResultModule {}
