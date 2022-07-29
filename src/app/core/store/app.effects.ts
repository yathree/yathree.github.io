import { DrivingClassEffects } from './effects/classes.effect';
import { DoctorEffect } from './effects/doctor.effects';
import { HospitalEffects } from './effects/hospital.effects';
import { InstructorEffects } from './effects/instructor.effects';
import { ManagerEffects } from './effects/manager.effects';
import { SchoolEffect } from './effects/school.effects';
import { StaffEffects } from './effects/staff.effects';
import { UserEffects } from './effects/user.effects';

export const effects = [
  SchoolEffect,
  HospitalEffects,
  DoctorEffect,
  InstructorEffects,
  ManagerEffects,
  StaffEffects,
  UserEffects,
  DrivingClassEffects,
];
