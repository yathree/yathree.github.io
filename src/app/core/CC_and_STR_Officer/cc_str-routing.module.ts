import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComplitedExamComponent } from './complited-exam/complited-exam.component';
import { CcPvcComponent } from './complited-exam/cc-pvc/cc-pvc.component';

const routes: Routes = [
    {
        path:'exam-complit',
        component:ComplitedExamComponent,
    },
    {
        path:'exam-complit/:data',
        component:CcPvcComponent,
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CC_and_STRRoutingModule { }