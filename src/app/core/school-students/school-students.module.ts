import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { SchoolStudentsComponent } from './school-students.component';

const routes: Route[] = [
  {
    path: '',
    component: SchoolStudentsComponent,
  },
];

@NgModule({
  declarations: [SchoolStudentsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class SchoolStudentsModule {}
