import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PagingAndStateComponent } from './paging-and-state.component';
import { StateControlsComponent } from './state-controls/state-controls.component';

@NgModule({
    declarations: [PagingAndStateComponent, StateControlsComponent],
    exports: [PagingAndStateComponent, StateControlsComponent],
    imports: [CommonModule, SharedModule]
})
export class PagingAndStateModule {
}
