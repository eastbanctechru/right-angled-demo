import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RTModule } from 'right-angled';
import { registerPersistenceService } from 'right-angled';

import { RtLocalStoragePersistenceService } from '../shared/persistence/local-storage-persistence-service';
import { RtQueryStringPersistenceService } from '../shared/persistence/query-string-persistence-service';
import { RtSessionStoragePersistenceService } from '../shared/persistence/session-storage-persistence-service';

import { AdditionalConfigurationModule } from '../+additional-configuration/additional-configuration.module';
import { CombinedSampleModule } from '../+combined-sample/combined-sample.module';
import { FiltersModule } from '../+filters/filters.module';
import { ListControlsModule } from '../+list-controls/list-controls.module';
import { MiscDirectivesModule } from '../+misc-directives/misc-directives.module';
import { PagingAndStateModule } from '../+paging-and-state/paging-and-state.module';
import { PersistenceModule } from '../+persistence/persistence.module';
import { SelectionModule } from '../+selection/selection.module';
import { SortingsModule } from '../+sortings/sortings.module';
import { SharedModule } from '../shared/shared.module';

import { DemoAppComponent }  from './app.component';
import { routing }        from './app.routing';

registerPersistenceService({multi: true, useClass: RtQueryStringPersistenceService});
registerPersistenceService({multi: true, useClass: RtSessionStoragePersistenceService});
registerPersistenceService({multi: true, useClass: RtLocalStoragePersistenceService});

@NgModule({
  bootstrap: [DemoAppComponent],
  declarations: [DemoAppComponent],
  imports: [BrowserModule, HttpModule, FormsModule, RTModule, routing, AdditionalConfigurationModule, CombinedSampleModule, FiltersModule, ListControlsModule, MiscDirectivesModule, PagingAndStateModule, PersistenceModule, SelectionModule, SortingsModule, SharedModule]
})
export class AppModule { }
