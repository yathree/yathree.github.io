import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StaffState } from "./staff.state";

export const staffState = createFeatureSelector<StaffState>('staff');
export const flatStaffs = createSelector(staffState, state => state.data);
export const selectedStaff = createSelector(staffState, state => state.selected);
export const isStaffSubmitting = createSelector(staffState, state => state.isSubmitting);
export const isUpdateMode = createSelector(staffState, state => state.isUpdateMode);
