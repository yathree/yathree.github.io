import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedStudentsComponent } from './booked-students.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxPrintModule } from 'ngx-print';

const routes: Route[] = [
  {
    path: '',
    component: BookedStudentsComponent,
  },
];

@NgModule({
  declarations: [BookedStudentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxPrintModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class BookedStudentModule {}
