import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PagingAndStateComponent } from './paging-and-state.component';
import { PagingAndStatesRoutes } from './paging-and-state.routes';
import { ReusableBufferedListSampleComponent } from './reusable-buffered-sample/reusable-buffered-sample.component';
import { ReusablePagedListSampleComponent } from './reusable-paged-sample/reusable-paged-sample.component';
import { StateComponentsComponent } from './state-components/state-components.component';

@NgModule({
  declarations: [ReusableBufferedListSampleComponent, ReusablePagedListSampleComponent, PagingAndStateComponent, StateComponentsComponent],
  exports: [ReusableBufferedListSampleComponent, ReusablePagedListSampleComponent, PagingAndStateComponent, StateComponentsComponent],
  imports: [CommonModule, RouterModule.forChild(PagingAndStatesRoutes), SharedModule]
})
export class PagingAndStateModule {
}
