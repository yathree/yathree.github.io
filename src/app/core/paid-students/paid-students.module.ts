import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { PaidStudentsComponent } from './paid-students.component';

const routes: Route[] = [
  {
    path: '',
    component: PaidStudentsComponent,
  },
];

@NgModule({
  declarations: [PaidStudentsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class PaidStudentsModule {}
