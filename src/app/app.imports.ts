import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';
import { RTModule } from 'right-angled';

import { QuickTourModule } from './quick-tour/quick-tour.module';
import { SharedModule } from './shared/shared.module';

import { routing } from './app.routing';

export const APP_IMPORTS = [BrowserModule,
  Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  HttpModule,
  FormsModule,
  RTModule,
  RouterModule,
  SharedModule.forRoot(),
  routing,
  QuickTourModule
];
