import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListControlsComponent } from './list-controls.component';

import { DefaultSortingsComponent } from './default-sortings/default-sortings.component';
import { UseRowNumberComponent } from './use-row-number/use-row-number.component';
import { UseRtListComponent } from './use-rt-list/use-rt-list.component';
import { UseSortingsComponent } from './use-sortings/use-sortings.component';

@NgModule({
  declarations: [ListControlsComponent, DefaultSortingsComponent, UseRtListComponent, UseRowNumberComponent, UseSortingsComponent],
  exports: [ListControlsComponent, DefaultSortingsComponent, UseRtListComponent, UseRowNumberComponent, UseSortingsComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class ListControlsModule {
}
