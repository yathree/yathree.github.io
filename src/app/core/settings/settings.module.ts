import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { ManagersComponent } from './managers/managers.component';
import { InstactorsComponent } from './instructors/instructors.component';
import { RestrictionsComponent } from './restrictions/restrictions.component';
import { RestrictionFormComponent } from './restrictions/restriction-form/restriction-form.component';
import { SchoolsComponent } from './schools/schools.component';
import { MenuCardModule } from '@app/components/menu-card/menu-card.module';
import { StaffComponent } from './staff/staff.component';
import { SchoolFormComponent } from './schools/school-form/school-form.component';
import { DoctorFormComponent } from './doctors/doctor-form/doctor-form.component';
import { PaymentStructureComponent } from './payment-structure/payment-structure.component';
import { LoadingSpinnerModule } from '@app/components/loading-spinner/loading-spinner.module';
import { StaffFormComponent } from './staff/staff-form/staff-form.component';
import { DrivingLicenseClassesComponent } from './driving-license-classes/driving-license-classes.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    SettingsComponent,
    HospitalsComponent,
    ManagersComponent,
    DoctorsComponent,
    InstactorsComponent,
    RestrictionsComponent,
    RestrictionFormComponent,
    SchoolsComponent,
    StaffComponent,
    SchoolFormComponent,
    DoctorFormComponent,
    PaymentStructureComponent,
    StaffFormComponent,
    DrivingLicenseClassesComponent,
    CarsComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MenuCardModule,
    SharedModule,
    LoadingSpinnerModule,
  ],
})
export class SettingsModule { }
