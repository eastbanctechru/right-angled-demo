import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiltersRoutes } from './+filters/filters.routes';
import { ListControlsRoutes } from './+list-controls/list-controls.routes';
import { MiscDirectivesRoutes } from './+misc-directives/misc-directives.routes';
import { PagingAndStatesRoutes } from './+paging-and-state/paging-and-state.routes';
import { PersistenceRoutes } from './+persistence/persistence.routes';
import { QuickTourRoutes } from './+quick-tour/quick-tour.routes';
import { SelectionRoutes } from './+selection/selection.routes';

export const appRoutes: Routes = [
  ...FiltersRoutes,
  ...ListControlsRoutes,
  ...SelectionRoutes,
  ...MiscDirectivesRoutes,
  ...PagingAndStatesRoutes,
  ...PersistenceRoutes,
  ...QuickTourRoutes,
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
