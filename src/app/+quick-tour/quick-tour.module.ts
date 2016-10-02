import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuickTourComponent } from './quick-tour.component';
import { UseListComponent } from './use-list/use-list.component';

@NgModule({
    declarations: [QuickTourComponent, UseListComponent],
    exports: [QuickTourComponent, UseListComponent],
    imports: [CommonModule, SharedModule]
})
export class QuickTourModule {
}
