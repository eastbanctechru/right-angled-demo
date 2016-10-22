import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { QuickTourComponent } from './quick-tour.component';
import { StarterComponent } from './starter/starter.component';
import { UseControlsComponent } from './use-controls/use-controls.component';
import { UseFiltersComponent } from './use-filters/use-filters.component';
import { UseListComponent } from './use-list/use-list.component';
import { UsePagingComponent } from './use-paging/use-paging.component';
import { UsePersistenceComponent } from './use-persistence/use-persistence.component';
import { UseSelectionComponent } from './use-selection/use-selection.component';
import { UseSortingsComponent } from './use-sortings/use-sortings.component';
import { UseStateComponent } from './use-state/use-state.component';

@NgModule({
  declarations: [QuickTourComponent, StarterComponent, UseListComponent, UseControlsComponent, UseFiltersComponent, UsePagingComponent, UsePersistenceComponent, UseSortingsComponent, UseStateComponent, UseSelectionComponent],
  exports: [QuickTourComponent, StarterComponent, UseListComponent, UseControlsComponent, UseFiltersComponent, UsePagingComponent, UsePersistenceComponent, UseSortingsComponent, UseStateComponent, UseSelectionComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule]
})
export class QuickTourModule {
}
