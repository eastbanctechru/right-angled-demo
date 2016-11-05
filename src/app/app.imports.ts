import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { RTModule } from 'right-angled';

import { FiltersModule } from './+filters/filters.module';
import { ListControlsModule } from './+list-controls/list-controls.module';
import { MiscDirectivesModule } from './+misc-directives/misc-directives.module';
import { PagingAndStateModule } from './+paging-and-state/paging-and-state.module';
import { PersistenceModule } from './+persistence/persistence.module';
import { QuickTourModule } from './+quick-tour/quick-tour.module';
import { SelectionModule } from './+selection/selection.module';
import { SharedModule } from './shared/shared.module';

import { routing } from './app.routing';

export const APP_IMPORTS = [BrowserModule,
  HttpModule,
  FormsModule,
  RTModule,
  RouterModule,
  SharedModule.forRoot(),
  routing,
  Angulartics2Module.forRoot(),
  FiltersModule,
  ListControlsModule,
  MiscDirectivesModule,
  PagingAndStateModule,
  PersistenceModule,
  QuickTourModule,
  SelectionModule
];

