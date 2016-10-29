import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RTModule } from 'right-angled';

import { AirportsService } from './data/airports.service';
import { LookupsService } from './data/lookups.service';

import { FilterAreaComponent } from './filter-area/filter-area.component';
import { BufferedFooterComponent } from './footers/buffered-footer.component/buffered-footer.component';
import { PagedFooterComponent } from './footers/paged-footer.component/paged-footer.component';
import { CodeTabComponent } from './tab/code-tab.component';
import { SampleTabComponent } from './tab/sample-tab.component';
import { TabSectionComponent } from './tab/tab-section.component';

import { SerializeToLocalStorageDirective } from './state-services/serialize-to-local-storage.directive';
import { SerializeToQueryStringDirective } from './state-services/serialize-to-query-string.directive';
import { SerializeToSessionStorageDirective } from './state-services/serialize-to-session-storage.directive';

@NgModule({
  declarations: [BufferedFooterComponent, PagedFooterComponent, FilterAreaComponent, CodeTabComponent, SampleTabComponent, TabSectionComponent, SerializeToLocalStorageDirective, SerializeToSessionStorageDirective, SerializeToQueryStringDirective],
  exports: [CommonModule, FormsModule, RTModule, BufferedFooterComponent, FilterAreaComponent, PagedFooterComponent, CodeTabComponent, SampleTabComponent, TabSectionComponent, SerializeToLocalStorageDirective, SerializeToSessionStorageDirective, SerializeToQueryStringDirective],
  imports: [CommonModule, FormsModule, RTModule]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
  return {
    ngModule: SharedModule,
    providers: [AirportsService, LookupsService]
  };
  }
}
