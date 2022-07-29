
import { Manager } from '@app/shared/models/manager.model';
import { createAction, props } from '@ngrx/store';

export const loadManagers = createAction('[MANAGER] loadAll');
export const managersLoaded = createAction(
  '[MANAGER] loaded',
  props<{ managers: Manager[] }>()
);
export const addManager = createAction(
  '[MANAGER] addNew',
  (manager: Manager) => manager
);
export const addManagerSuccess = createAction(
  '[MANAGER] addSuccess',
  props<{ manager: Manager }>()
);
export const updateManager = createAction(
  '[MANAGER] update',
  (manager: Manager) => manager
);
export const updateManagerSuccess = createAction(
  '[MANAGER] updateSuccess',
  props<{ manager: Manager }>()
);
export const selectManager = createAction(
  '[MANAGER] selectManager',
  props<{ manager: Manager }>()
);
export const cancelManagerUpdate = createAction('[MANAGER] cancelEdit');
