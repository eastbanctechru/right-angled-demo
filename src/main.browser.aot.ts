import "./polyfills.browser.aot";
declare var ENV: string;

import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { BrowserAppModuleNgFactory } from "../compiled/src/app/browser.app.module.ngfactory";

if ("production" === ENV) {
    enableProdMode();
}

export function main(): Promise<any> {
    return (
        platformBrowser()
            .bootstrapModuleFactory(BrowserAppModuleNgFactory)
            // tslint:disable-next-line:no-console
            .catch(err => console.log(err))
    );
}

export function bootstrapDomReady(): void {
    document.addEventListener("DOMContentLoaded", main);
}

bootstrapDomReady();
