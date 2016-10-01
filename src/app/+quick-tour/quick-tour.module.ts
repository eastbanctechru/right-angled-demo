import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BasicSampleComponent } from './basic-sample/basic-sample.component';
import { QuickTourComponent } from './quick-tour.component';

@NgModule({
    declarations: [QuickTourComponent, BasicSampleComponent],
    exports: [QuickTourComponent, BasicSampleComponent],
    imports: [CommonModule, SharedModule]
})
export class QuickTourModule {
}
