import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InitialSampleComponent } from './initial-sample/initial-sample.component';
import { QuickTourComponent } from './quick-tour.component';
import { UseListComponent } from './use-list/use-list.component';

@NgModule({
    declarations: [QuickTourComponent, InitialSampleComponent, UseListComponent],
    exports: [QuickTourComponent, InitialSampleComponent, UseListComponent],
    imports: [CommonModule, SharedModule]
})
export class QuickTourModule {
}
