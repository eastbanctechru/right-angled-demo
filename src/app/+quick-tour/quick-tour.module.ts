import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuickTourComponent } from './quick-tour.component';
import { UseListComponent } from './use-list/use-list.component';
import { UseSortingsComponent } from './use-sortings/use-sortings.component';

@NgModule({
    declarations: [QuickTourComponent, UseListComponent, UseSortingsComponent],
    exports: [QuickTourComponent, UseListComponent, UseSortingsComponent],
    imports: [CommonModule, SharedModule]
})
export class QuickTourModule {
}
