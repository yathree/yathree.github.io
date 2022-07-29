import { Injectable } from '@angular/core';
import { Menu } from '@shared/models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  getMenus(): Menu[] {
    return [
      {
        name: 'Dashboard',
        url: 'dashboard',
        icon: 'dashboard',
      },
      {
        name: 'Users',
        url: 'users',
        icon: 'people_outline',
        role: 'admin',
      },
      {
        name: 'Settings',
        url: 'settings',
        icon: 'settings',
        role: 'admin',
      },
      {
        name: 'Payments',
        url: '/payments',
        icon: 'money',
        role: 'admin',
      },
      {
        name: 'Paid Students',
        url: '/paid-students',
        icon: 'spatial_tracking',
        role: 'admin',
      },
      {
        name: 'Checked Students',
        url: '/checked-students',
        icon: 'how_to_reg',
        role: 'admin',
      },
      {
        name: 'Medical Checkup',
        url: 'medical-checkup',
        icon: 'bloodtype',
        role: 'doctor',
      },
      {
        name: 'Checked Students',
        url: 'checked-students',
        icon: 'medication',
        role: 'doctor',
      },
      
      {
        name: 'Add Student',
        url: '/managers/add-student',
        icon: 'person',
        role: 'manager',
      },
      {
        name: 'Students',
        url: '/managers/students',
        icon: 'people',
        role: 'manager',
      },
      
      {
        name: 'Schools',
        url: '/managers/schools',
        icon: 'schools',
        role: 'manager',
      },
      {
        name: 'Instructors',
        url: '/managers/instructors',
        icon: 'airline_seat_recline_normal',
        role: 'manager',
      },
      {
        name: 'Payments',
        url: '/managers/payments',
        icon: 'payments',
        role: 'manager',
      },
      {
        name: 'Cars',
        url: '/managers/cars',
        icon: 'directions_car',
        role: 'manager',
      },
      {
        name: 'Examination Sessions',
        url: '/theory-exam-sessions',
        icon: 'access_time',
        role: 'Theory_Examination_Officer',
      },
      {
        name: 'Booked Students',
        url: '/booked-students',
        icon: 'account_circle_full',
        role: 'Theory_Examination_Officer',
      },
      {
        name: 'Exam Result',
        url: '/exam-result',
        icon: 'description',
        role: 'Theory_Examination_Officer',
      },
      {
        name: 'All Theory Result',
        url: '/all-theory-result',
        icon: 'book',
        role: 'Theory_Examination_Officer',
      },
      {
        name: 'Schools Booked',
        url: '/Driving_Test_Officer/schools-booked',
        icon: 'house',
        role: 'Driving_Test_Officer',
      },
      {
        name: 'Students Booked',
        url: '/Driving_Test_Officer/students-booked',
        icon: 'schools',
        role: 'Driving_Test_Officer',
      },
      {
        name: 'Day Students',
        url: '/examiner/booke-students',
        icon: 'note_add',
        role: 'Examiner',
      },
      {
        name: 'Day Session',
        url: '/examiner/day-session',
        icon: 'departure_board',
        role: 'Examiner',
      },
      {
        name: 'Practical Result',
        url: '/examiner/practical-resuts',
        icon: 'star',
        role: 'Examiner',
      },
      {
        name: 'Students',
        url: '/students-learners',
        icon: 'picture_in_picture',
        role: 'Learners_License_Officer',
      },
      {
        name: 'Registed Students',
        url: '/instructor/registed-students',
        icon: 'people',
        role: 'instructor',
      },
      {
        name: 'Control Number',
        url: '/instructor/control-number',
        icon: 'description',
        role: 'instructor',
      },
      {
        name: 'Practical Booking',
        url: '/instructor/booking-practical',
        icon: 'airline_seat_recline_normal',
        role: 'instructor',
      },
      {
        name: 'Confirmed Booking',
        url: '/instructor/confirm-booking',
        icon: 'booking',
        role: 'instructor',
      },
      {
        name: 'Renew Practical',
        url: '/instructor/renew-practical',
        icon: 'access_time',
        role: 'instructor',
      },
      {
        name: 'Student Exam Complit',
        url: '/CC_and_STR_Officer/exam-complit',
        icon: 'note_add',
        role: 'CC_and_STR_Printer_Officer',
      },
      {
        name: 'All Licence',
        url: '/pvc/complete-licence',
        icon: 'airline_seat_recline_normal',
        role: 'PVC_Card_Printer_and_Renew_Officer',
      },
      {
        name: 'All Licence',
        url: '/demerit/complete-licence',
        icon: 'airline_seat_recline_normal',
        role: 'Demerit_Point_Officer',
      },
      
    ];
  }
}
