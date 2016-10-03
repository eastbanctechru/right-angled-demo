import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { QuickTourComponent } from './quick-tour.component';
import { UseListComponent } from './use-list/use-list.component';
import { UseSelectionComponent } from './use-selection/use-selection.component';
import { UseSortingsComponent } from './use-sortings/use-sortings.component';
import { UseStateComponent } from './use-state/use-state.component';


@NgModule({
    declarations: [QuickTourComponent, UseListComponent, UseSortingsComponent, UseStateComponent, UseSelectionComponent],
    exports: [QuickTourComponent, UseListComponent, UseSortingsComponent, UseStateComponent, UseSelectionComponent],
    imports: [CommonModule, SharedModule, RouterModule]
})
export class QuickTourModule {
}
