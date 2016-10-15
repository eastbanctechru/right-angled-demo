import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListControlsComponent } from './list-controls.component';

@NgModule({
    declarations: [ListControlsComponent],
    exports: [ListControlsComponent],
    imports: [CommonModule, SharedModule, RouterModule]
})
export class ListControlsModule {
}
