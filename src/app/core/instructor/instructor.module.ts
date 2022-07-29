import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRoutingModule } from './instructor-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { RegistedStudentsComponent } from './registed-students/registed-students.component';
import { PracticalBookingComponent } from './practical-booking/practical-booking.component';
import { RenewPracticalComponent } from './renew-practical/renew-practical.component';
import { ClassAComponent } from './class-a/class-a.component';
import { ClassBComponent } from './class-b/class-b.component';
import { ClassCComponent } from './class-c/class-c.component';
import { ClassDComponent } from './class-d/class-d.component';
import { ClassEGComponent } from './class-e-g/class-e-g.component';
import { ControlNumberComponent } from './control-number/control-number.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
@NgModule({
  declarations: [
    RegistedStudentsComponent,
    PracticalBookingComponent,
    RenewPracticalComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    ClassDComponent,
    ClassEGComponent,
    ControlNumberComponent,
    ConfirmBookingComponent,
  ],
  imports: [CommonModule, InstructorRoutingModule, SharedModule],
})
export class InstructorModule {}
