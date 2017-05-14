import { APP_BOOTSTRAP_LISTENER, ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { DemoAppComponent } from './app.component';
import { AppModule } from './app.module';

import 'rxjs/add/operator/first';

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState): () => void {
  return () => {
    appRef.isStable
      .filter((stable) => stable)
      .first()
      .subscribe(() => {
        transferState.inject();
      });
  };
}

@NgModule({
  bootstrap: [DemoAppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'rt-demo-app'
    }),
    NoopAnimationsModule,
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ],
  providers: [
    {
      deps: [
        ApplicationRef,
        TransferState
      ],
      multi: true,
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap
    }
  ]
})
export class ServerAppModule {

}
