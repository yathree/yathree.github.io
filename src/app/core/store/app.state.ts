import { doctorReducer } from '../settings/doctors/state/doctor.reducer';
import { classesReducer } from '../settings/driving-license-classes/state/classes.reducer';
import { hospitalReducer } from '../settings/hospitals/state/hospital.reducer';
import { instructorReducer } from '../settings/instructors/state/instructor.reducer';
import { managerReducer } from '../settings/managers/state/manager.reducer';
import { schoolReducer } from '../settings/schools/state/school.reducer';
import { staffReducer } from '../settings/staff/state/staff.reducer';
import { userReducer } from '../users/state/user.reducer';

export const appReducers = {
  hospitals: hospitalReducer,
  schools: schoolReducer,
  classes: classesReducer,
  doctor: doctorReducer,
  instructor: instructorReducer,
  manager: managerReducer,
  staff: staffReducer,
  user: userReducer,
};
