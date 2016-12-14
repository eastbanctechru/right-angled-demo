import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RTModule } from 'right-angled';

import { AirportsService } from './data/airports.service';
import { LookupsService } from './data/lookups.service';

import { CopyButtonComponent } from './copy-button/copy-button.component';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { BufferedFooterComponent } from './footers/buffered-footer.component/buffered-footer.component';
import { PagedFooterComponent } from './footers/paged-footer.component/paged-footer.component';
import { CodeTabComponent } from './tab/code-tab.component';
import { SampleTabComponent } from './tab/sample-tab.component';
import { TabSectionComponent } from './tab/tab-section.component';

@NgModule({
  declarations: [BufferedFooterComponent, PagedFooterComponent, FilterAreaComponent, CodeTabComponent, CopyButtonComponent, SampleTabComponent, TabSectionComponent],
  exports: [CommonModule, FormsModule, RTModule, BufferedFooterComponent, FilterAreaComponent, PagedFooterComponent, CodeTabComponent, CopyButtonComponent, SampleTabComponent, TabSectionComponent],
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
