import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PagingAndStatusesComponent } from './paging-and-statuses.component';
import { PagingAndStatusesRoutes } from './paging-and-statuses.routes';
import { ReusableBufferedListSampleComponent } from './reusable-buffered-sample/reusable-buffered-sample.component';
import { ReusablePagedListSampleComponent } from './reusable-paged-sample/reusable-paged-sample.component';
import { StatusComponentsComponent } from './status-components/status-components.component';

@NgModule({
  declarations: [ReusableBufferedListSampleComponent, ReusablePagedListSampleComponent, PagingAndStatusesComponent, StatusComponentsComponent],
  exports: [ReusableBufferedListSampleComponent, ReusablePagedListSampleComponent, PagingAndStatusesComponent, StatusComponentsComponent],
  imports: [CommonModule, RouterModule.forChild(PagingAndStatusesRoutes), SharedModule]
})
export class PagingAndStatusesModule {
}
