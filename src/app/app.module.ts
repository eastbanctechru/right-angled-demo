import { NgModule } from '@angular/core';

import { DemoAppComponent } from './app.component';
import { APP_DECLARATIONS } from './app.declarations';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

@NgModule({
  bootstrap: [DemoAppComponent],
  declarations: [DemoAppComponent, APP_DECLARATIONS],
  imports: [APP_IMPORTS],
  providers: [APP_PROVIDERS]
})
export class AppModule { }
