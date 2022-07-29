import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { PrExOfRoutingModule } from './PrExOf-routing.module';
import { BookingComponent } from './booking/booking.component';
import { StudentsBookingComponent } from './students-booking/students-booking.component';
import { BookingFormComponent } from './students-booking/booking-form/booking-form.component';

@NgModule({
  declarations: [
    BookingComponent,
    StudentsBookingComponent,
    BookingFormComponent,
  ],
  imports: [CommonModule,PrExOfRoutingModule, SharedModule],
})
export class PrExOfModule {}
