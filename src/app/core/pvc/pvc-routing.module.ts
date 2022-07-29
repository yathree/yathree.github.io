import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompliteLicenceComponent } from './complite-licence/complite-licence.component';

const routes: Routes = [
    {
        path:'complete-licence',
        component:CompliteLicenceComponent,
    },   
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PvcRoutingModule { }