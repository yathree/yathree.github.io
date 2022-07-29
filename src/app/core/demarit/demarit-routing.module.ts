import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentLicenseComponent } from './student-license/student-license.component';

const routes: Routes = [
    {
        path:'complete-licence',
        component:StudentLicenseComponent,
    },   
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DemeritRoutingModule { }