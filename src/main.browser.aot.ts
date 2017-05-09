import './polyfills.browser.aot';
declare const ENV: string;

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

if ('production' === ENV) {
  enableProdMode();
}

export function main(): Promise<any> {
  return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    // tslint:disable-next-line:no-console
    .catch((err) => console.error(err));
}

export function bootstrapDomReady(): void {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
