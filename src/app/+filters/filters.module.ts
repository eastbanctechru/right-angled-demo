import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FilterConfigComponent } from './filter-config/filter-config.component';
import { FiltersSampleComponent } from './filters-sample/filters-sample.component';
import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [FiltersComponent, FiltersSampleComponent, FilterConfigComponent],
  exports: [FiltersComponent, FiltersSampleComponent, FilterConfigComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class FiltersModule {
}
