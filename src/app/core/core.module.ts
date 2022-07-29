import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SideMenuComponent } from '../common/side-menu/side-menu.component';
import { CoreComponent } from './core.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from '../common/navbar/navbar.component';
import { CardComponent } from '@components/card/card.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HeaderCardModule } from '@components/header-card/header-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HasRoleDirective } from '@shared/directives/has-role.directive';
import { MedicalCheckupComponent } from './doctor/medical-checkup/medical-checkup.component';
import { CheckedStudentsComponent } from './doctor/checked-students/checked-students.component';
import { StudentInfoComponent } from './doctor/components/student-info/student-info.component';
import { LearnersComponent } from './learners/learners.component';
import { LearnerPreviewComponent } from './learners/learner-preview/learner-preview.component';
import { OuterViewComponent } from './learners/learner-preview/outer-view/outer-view.component';
import { InnerViewComponent } from './learners/learner-preview/inner-view/inner-view.component';
import { PaidStudentsComponent } from './dashboard/paid-students/paid-students.component';
import { AllTheoryResultComponent } from './all-theory-result/all-theory-result.component';

@NgModule({
  declarations: [
    CoreComponent,
    DashboardComponent,
    UsersComponent,
    ReportsComponent,
    SideMenuComponent,
    NotFoundComponent,
    NavbarComponent,
    CardComponent,
    HasRoleDirective,
    MedicalCheckupComponent,
    CheckedStudentsComponent,
    StudentInfoComponent,
    LearnersComponent,
    LearnerPreviewComponent,
    OuterViewComponent,
    InnerViewComponent,
    PaidStudentsComponent,
    AllTheoryResultComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CoreRoutingModule,
    LayoutModule,
    MatPaginatorModule,
    MatTableModule,
    NgxDatatableModule,
    HeaderCardModule,
  ],
  exports: [MatSnackBarModule],
})
export class CoreModule { }
