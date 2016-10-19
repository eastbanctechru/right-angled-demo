import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { PersistenceSampleComponent } from './persistence-sample/persistence-sample.component';
import { PersistenceComponent } from './persistence.component';

@NgModule({
    declarations: [PersistenceComponent, FilterAreaComponent, PersistenceSampleComponent],
    exports: [PersistenceComponent, FilterAreaComponent, PersistenceSampleComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class PersistenceModule {
}
