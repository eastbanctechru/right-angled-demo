/* tslint:disable max-line-length */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserTransferStateModule } from "../modules/transfer-state/browser-transfer-state.module";
import { DemoAppComponent } from "./app.component";
import { AppModule } from "./app.module";

@NgModule({
    bootstrap: [DemoAppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({
            appId: "rt-demo-app"
        }),
        BrowserTransferStateModule,
        AppModule
    ]
})
export class BrowserAppModule {}
