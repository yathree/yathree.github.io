import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DaySessionComponent } from './day-session/day-session.component';
import { PracticalResultComponent } from './practical-result/practical-result.component';
import { BookeStudentComponent } from './booke-student/booke-student.component';

const routes: Routes = [
    {
        path:'day-session',
        component:DaySessionComponent,
    },
    {
        path:'practical-resuts',
        component:PracticalResultComponent,
    },
    {
        path:'booke-students',
        component:BookeStudentComponent,
    },
    
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ExaminerRoutingModule { }