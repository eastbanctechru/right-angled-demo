import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListControlsComponent } from './list-controls.component';
import { ListControlsRoutes } from './list-controls.routes';

import { CustomItemsHandlingComponent } from './custom-items-handling/custom-items-handling.component';
import { DefaultSortingsComponent } from './default-sortings/default-sortings.component';
import { UseRowNumberComponent } from './use-row-number/use-row-number.component';
import { UseRtListComponent } from './use-rt-list/use-rt-list.component';
import { UseSortingsComponent } from './use-sortings/use-sortings.component';

@NgModule({
  declarations: [ListControlsComponent, CustomItemsHandlingComponent, DefaultSortingsComponent, UseRtListComponent, UseRowNumberComponent, UseSortingsComponent],
  exports: [ListControlsComponent, CustomItemsHandlingComponent, DefaultSortingsComponent, UseRtListComponent, UseRowNumberComponent, UseSortingsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ListControlsRoutes)]
})
export class ListControlsModule {
}
