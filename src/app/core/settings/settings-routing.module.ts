import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ManagersComponent } from './managers/managers.component';
import { InstactorsComponent } from './instructors/instructors.component';
import { RestrictionsComponent } from './restrictions/restrictions.component';
import { SchoolsComponent } from './schools/schools.component';
import { StaffComponent } from './staff/staff.component';
import { PaymentStructureComponent } from './payment-structure/payment-structure.component';
import { DrivingLicenseClassesComponent } from './driving-license-classes/driving-license-classes.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
  {
    path: 'hospitals',
    component: HospitalsComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: 'managers',
    component: ManagersComponent,
  },
  {
    path: 'instractors',
    component: InstactorsComponent,
  },
  {
    path: 'restrictions',
    component: RestrictionsComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
  {
    path: 'staffs',
    component: StaffComponent,
  },
  {
    path: 'payment-structure',
    component: PaymentStructureComponent,
  },
  {
    path: 'driving-license-classes',
    component: DrivingLicenseClassesComponent,
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
