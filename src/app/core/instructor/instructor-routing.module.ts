import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistedStudentsComponent } from './registed-students/registed-students.component';
import { PracticalBookingComponent } from './practical-booking/practical-booking.component';
import { RenewPracticalComponent } from './renew-practical/renew-practical.component';
import { ControlNumberComponent } from './control-number/control-number.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';

const routes: Routes = [
    {
        path:'registed-students',
        component:RegistedStudentsComponent,
    },
    {
        path:'booking-practical',
        component:PracticalBookingComponent,
        // children: [
        //     {   path: '',component:StudentsComponent },
            // {   path:'students',component:StudentsComponent, },
        //     {   path:'booking/:id',component:BookingComponent, }
        //   ]
    },
    {
        path:'control-number',
        component:ControlNumberComponent,
    },
    {
        path:'renew-practical',
        component:RenewPracticalComponent,
    },
    {
        path:'confirm-booking',
        component:ConfirmBookingComponent,
    },
    
    
    
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InstructorRoutingModule { }