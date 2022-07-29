import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '@app/guards/admin.guard';
import { AuthGuard } from '@app/guards/auth.guard';
import { RolesGuard } from '@app/guards/roles.guard';
import { role } from '@shared/enums/role.enum';
import { CoreComponent } from '@core/core.component';
import { DashboardComponent } from '@core/dashboard/dashboard.component';
import { MedicalCheckupComponent } from '@core/doctor/medical-checkup/medical-checkup.component';
import { ReportsComponent } from '@core/reports/reports.component';
import { UsersComponent } from '@core/users/users.component';
import { LearnersComponent } from './learners/learners.component';
import { LearnerPreviewComponent } from './learners/learner-preview/learner-preview.component';
import { PaidStudentsComponent } from './paid-students/paid-students.component';
import { CheckedStudentsComponent } from './checked-students/checked-students.component';
import { CheckedStudentsModule } from './checked-students/checked-students.module';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'report',
        component: ReportsComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'settings',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'payments',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'paid-students',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./paid-students/paid-students.module').then(
            (m) => m.PaidStudentsModule
          ),
      },
      {
        path: 'checked-students',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./checked-students/checked-students.module').then(
            (m) => m.CheckedStudentsModule
          ),
      },
      {
        path: 'school-students/:schoolId',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./school-students/school-students.module').then(
            (m) => m.SchoolStudentsModule
          ),
      },
      {
        path: 'managers',
        canActivate: [AuthGuard, RolesGuard],
        data: { roles: [role.manager] },
        loadChildren: () =>
          import('./manager/manager.module').then((m) => m.ManagerModule),
      },
      {
        path: 'instructor',
        canActivate: [AuthGuard, RolesGuard],
        data: { roles: [role.instructor] },
        loadChildren: () =>
          import('./instructor/instructor.module').then((m) => m.InstructorModule),
      },
      {
        path: 'CC_and_STR_Officer',
        canActivate: [AuthGuard, RolesGuard],
        data: { roles: [role.CC_and_STR_Officer] },
        loadChildren: () =>
          import('./CC_and_STR_Officer/ccstr.module').then((m) => m.CC_STRModule),
      },
      {
        path: 'pvc',
        canActivate: [AuthGuard, RolesGuard],
        data: { roles: [role.pvc] },
        loadChildren: () =>
          import('./pvc/pvc.module').then((m) => m.PvcModule),
      },
      {
        path: 'demerit',
        canActivate: [AuthGuard, RolesGuard],
        data: { roles: [role.demerit] },
        loadChildren: () =>
          import('./demarit/demerit.module').then((m) => m.DemeritModule),
      },
      {
        path: 'medical-checkup',
        component: MedicalCheckupComponent,
        canActivate: [RolesGuard],
        data: { roles: [role.doctor] },
      },
      {
        path: 'checked-students',
        component: CheckedStudentsComponent,
        canActivate: [RolesGuard],
        data: { roles: [role.doctor] },
      },
      {
        path: 'theory-exam-sessions',
        canActivate: [RolesGuard],
        data: { roles: [role.thExOf] },
        loadChildren: () =>
          import('./exam-sessions/exam-sessions.module').then(
            (m) => m.ExamSessionsModule
          ),
      },
      {
        path: 'Driving_Test_Officer',
        canActivate: [RolesGuard],
        data: { roles: [role.prExOf] },
        loadChildren: () =>
          import('./prExOf/PrExOf.module').then(
            (m) => m.PrExOfModule
          ),
      },
      {
        path: 'examiner',
        canActivate: [RolesGuard],
        data: { roles: [role.Examiner] },
        loadChildren: () =>
          import('./examiner/examiner.module').then(
            (m) => m.ExaminerModule
          ),
      },
      {
        path: 'booked-students',
        canActivate: [RolesGuard],
        data: { roles: [role.thExOf] },
        loadChildren: () =>
          import('./booked-students/booked-students.module').then(
            (m) => m.BookedStudentModule
          ),
      },
      {
        path: 'exam-result',
        canActivate: [RolesGuard],
        data: { roles: [role.thExOf] },
        loadChildren: () =>
          import('./exam-result/exam-result.module').then(
            (m) => m.ExamResultModule
          ),
      },
      {
        path: 'all-theory-result',
        canActivate: [RolesGuard],
        data: { roles: [role.thExOf] },
        loadChildren: () =>
          import('./all-theory-result/all-exam-result.module').then(
            (m) => m.AllExamResultModule
          ),
      },
      {
        path: 'students-learners',
        canActivate: [RolesGuard],
        data: { roles: [role.leliOf] },
        component: LearnersComponent,
      },
      {
        path: 'students-learners/:id',
        canActivate: [RolesGuard],
        data: { roles: [role.leliOf] },
        component: LearnerPreviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
