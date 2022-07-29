import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { StudentsComponent } from './students/students.component';
import { SchoolsComponent } from './schools/schools.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from '@app/shared/shared.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { RowStudentsComponent } from './students/row-students/row-students.component';
import { AssignedStudentsComponent } from './students/assigned-students/assigned-students.component';
import { CarsComponent } from './cars/cars.component';
import { CarsFormComponent } from './cars/cars-form/cars-form.component';

@NgModule({
  declarations: [
    StudentsComponent,
    SchoolsComponent,
    InstructorsComponent,
    PaymentsComponent,
    AddStudentComponent,
    RowStudentsComponent,
    AssignedStudentsComponent,
    CarsComponent,
    CarsFormComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule, SharedModule],
})
export class ManagerModule {}
