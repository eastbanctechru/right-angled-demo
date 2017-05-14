/**
 * This module is the entry for your App when NOT using universal.
 *
 * Make sure to use the 3 constant APP_ imports so you don't have to keep
 * track of your root app dependencies here. Only import directly in this file if
 * there is something that is specific to the environment.
 */

import { ApplicationRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';

import { APP_DECLARATIONS } from './app.declarations';
import { APP_ENTRY_COMPONENTS } from './app.entry-components';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

import { DemoAppComponent } from './app.component';

@NgModule({
  bootstrap: [DemoAppComponent],
  declarations: [DemoAppComponent, APP_DECLARATIONS],
  entryComponents: [APP_ENTRY_COMPONENTS],
  imports: [
    APP_IMPORTS,
    BrowserModule,
    DEV_SERVER ? [BrowserAnimationsModule, BrowserTransferStateModule] : [],
    HttpModule
  ],
  providers: [APP_PROVIDERS]
})
export class AppModule { }
