import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RTModule } from 'right-angled';

import { FiltersModule } from './+filters/filters.module';
import { ListControlsModule } from './+list-controls/list-controls.module';
import { MiscDirectivesModule } from './+misc-directives/misc-directives.module';
import { PagingAndStateModule } from './+paging-and-state/paging-and-state.module';
import { PersistenceModule } from './+persistence/persistence.module';
import { QuickTourModule } from './+quick-tour/quick-tour.module';
import { SelectionModule } from './+selection/selection.module';
import { SharedModule } from './shared/shared.module';

import { DemoAppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  bootstrap: [DemoAppComponent],
  declarations: [DemoAppComponent],
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    RTModule,
    SharedModule.forRoot(),
    routing,
    FiltersModule,
    ListControlsModule,
    MiscDirectivesModule,
    PagingAndStateModule,
    PersistenceModule,
    QuickTourModule,
    SelectionModule]
})
export class AppModule { }
