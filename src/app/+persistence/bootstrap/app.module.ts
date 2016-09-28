import { NgModule } from '@angular/core';
import { RTModule } from 'right-angled';

import { AppComponent } from './app.component';

import { PersistenceServiceFactory } from './persistence-service-factory';
import { PersistenceServiceImplementation } from './persistence-service-implementation';
import { persistenceServiceSingleton } from './persistence-service-singleton';

RTModule.registerPersistenceService({ multi: true, useClass: PersistenceServiceImplementation });
RTModule.registerPersistenceService({ multi: true, useFactory: PersistenceServiceFactory });
RTModule.registerPersistenceService({ multi: true, useValue: persistenceServiceSingleton });

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [RTModule]
})
export class AppModule { }
