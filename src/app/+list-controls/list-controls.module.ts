import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListControlsComponent } from './list-controls.component';

import { UseRtListComponent } from './use-rt-list/use-rt-list.component';

@NgModule({
    declarations: [ListControlsComponent, UseRtListComponent],
    exports: [ListControlsComponent, UseRtListComponent],
    imports: [CommonModule, SharedModule, RouterModule]
})
export class ListControlsModule {
}
