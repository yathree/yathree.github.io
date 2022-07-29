import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { CheckedStudentsComponent } from './checked-students.component';

const routes: Route[] = [
  {
    path: '',
    component: CheckedStudentsComponent,
  },
];

@NgModule({
  declarations: [CheckedStudentsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class CheckedStudentsModule {}
