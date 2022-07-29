import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminerRoutingModule } from './examiner-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DaySessionComponent } from './day-session/day-session.component';
import { PracticalResultComponent } from './practical-result/practical-result.component';
import { PreCheckResultComponent } from './practical-result/pre-check-result/pre-check-result.component';
import { YardCheckResultComponent } from './practical-result/yard-check-result/yard-check-result.component';
import { RoadCheckResultComponent } from './practical-result/road-check-result/road-check-result.component';
import { BookeStudentComponent } from './booke-student/booke-student.component';
import { ResultFormComponent } from './practical-result/result-form/result-form.component';
@NgModule({
  declarations: [
    DaySessionComponent,
    PracticalResultComponent,
    PreCheckResultComponent,
    YardCheckResultComponent,
    RoadCheckResultComponent,
    BookeStudentComponent,
    ResultFormComponent
  ],
  imports: [CommonModule, ExaminerRoutingModule, SharedModule],
})
export class ExaminerModule {}
