import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BufferedComponentsComponent } from './buffered-components/buffered-components.component';
import { PagedComponentsComponent } from './paged-components/paged-components.component';
import { PagingAndStateComponent } from './paging-and-state.component';
import { ReusableBufferedListSampleComponent } from './reusable-buffered-sample/reusable-buffered-sample.component';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';
import { StateComponentsComponent } from './state-components/state-components.component';

@NgModule({
    declarations: [BufferedComponentsComponent, ReusableBufferedListSampleComponent, ReusableComponentComponent, PagedComponentsComponent, PagingAndStateComponent, StateComponentsComponent],
    exports: [BufferedComponentsComponent, ReusableBufferedListSampleComponent, ReusableComponentComponent, PagedComponentsComponent, PagingAndStateComponent, StateComponentsComponent],
    imports: [CommonModule, SharedModule]
})
export class PagingAndStateModule {
}
