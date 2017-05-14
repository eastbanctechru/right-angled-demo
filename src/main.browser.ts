import './polyfills.browser';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { BrowserAppModule } from './app/browser.app.module';
import { decorateModuleRef } from './environment';

if ('production' === ENV) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DEV_SERVER ? AppModule : BrowserAppModule)
    .then(decorateModuleRef)
  // tslint:disable-next-line:no-console
    .catch((err) => console.error(err));
