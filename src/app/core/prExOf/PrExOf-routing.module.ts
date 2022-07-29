import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { StudentsBookingComponent } from './students-booking/students-booking.component';

const routes: Routes = [
    {
        path:'schools-booked',
        component:BookingComponent,
        // children: [
        //     {   path: '',component:StudentsComponent },
        //     {   path:'students',component:StudentsComponent, },
        //     {   path:'booking/:id',component:BookingComponent, }
        //   ]
    },  
    {
        path:'students-booked',
        component:StudentsBookingComponent,
    }, 
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PrExOfRoutingModule { }