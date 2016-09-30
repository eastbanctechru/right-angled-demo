import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuickTourComponent } from './quick-tour.component';

@NgModule({
    declarations: [QuickTourComponent],
    exports: [QuickTourComponent],
    imports: [CommonModule, SharedModule]
})
export class QuickTourModule {
}
