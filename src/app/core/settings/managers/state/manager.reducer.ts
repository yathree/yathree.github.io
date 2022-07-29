import { DataState } from '@app/shared/enums/dataState';
import { createReducer, on } from '@ngrx/store';
import { addManager, addManagerSuccess, cancelManagerUpdate, loadManagers, managersLoaded, selectManager, updateManager, updateManagerSuccess } from './manager.actions';
import { initialManagerState } from './manager.state';

export const managerReducer = createReducer(
  initialManagerState,
  on(loadManagers, (state) => ({ ...state, dataState: DataState.LOADING })),
  on(managersLoaded, (state, action) => ({
    ...state,
    dataState: DataState.LOADED,
    data: action.managers,
  })),
  on(addManager, (state) => ({ ...state, isSubmitting: true })),
  on(addManagerSuccess, (state, { manager }) => ({
    ...state,
    data: [...state.data, manager],
    isSubmitting: false,
  })),
  on(selectManager, (state, { manager }) => ({
    ...state,
    selected: manager,
    isUpdateMode: true,
  })),
  on(updateManager, (state) => ({ ...state, isSubmitting: true })),
  on(updateManagerSuccess, (state, { manager }) => {
    const index = state.data.findIndex((d) => d.id === manager.id);
    const updatedSchools = [...state.data];
    updatedSchools[index] = manager;

    return {
      ...state,
      isSubmitting: false,
      isUpdateMode: false,
      selected: undefined,
      data: updatedSchools,
    };
  }),
  on(cancelManagerUpdate, (state) => ({
    ...state,
    isSubmitting: false,
    isUpdateMode: false,
    selected: undefined,
  }))
);
