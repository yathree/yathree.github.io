import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { SchoolsComponent } from './schools/schools.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RowStudentsComponent } from './students/row-students/row-students.component';
import { AssignedStudentsComponent } from './students/assigned-students/assigned-students.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      { path: '', redirectTo: 'assigned', pathMatch: 'full' },
      { path: 'assigned', component: AssignedStudentsComponent },
      { path: 'row', component: RowStudentsComponent }
    ]
  },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule { }
