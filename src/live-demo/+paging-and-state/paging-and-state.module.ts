import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BufferedComponentsComponent } from './buffered-components/buffered-components.component';
import { PagedComponentsComponent } from './paged-components/paged-components.component';
import { PagingAndStateComponent } from './paging-and-state.component';
import { StateComponentsComponent } from './state-components/state-components.component';

@NgModule({
    declarations: [BufferedComponentsComponent, PagedComponentsComponent, PagingAndStateComponent, StateComponentsComponent],
    exports: [BufferedComponentsComponent, PagedComponentsComponent, PagingAndStateComponent, StateComponentsComponent],
    imports: [CommonModule, SharedModule]
})
export class PagingAndStateModule {
}
