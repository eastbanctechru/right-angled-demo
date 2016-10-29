import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoerceSampleComponent } from './coerce-sample/coerce-sample.component';
import { FiltersSampleComponent } from './filters-sample/filters-sample.component';
import { FiltersComponent } from './filters.component';
import { ParameterNameSampleComponent } from './parameter-name-sample/parameter-name-sample.component';

@NgModule({
  declarations: [FiltersComponent, FiltersSampleComponent, CoerceSampleComponent, ParameterNameSampleComponent],
  exports: [FiltersComponent, FiltersSampleComponent, CoerceSampleComponent, ParameterNameSampleComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class FiltersModule {
}
