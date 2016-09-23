import { NgModule }      from '@angular/core';
import { RTListModule } from 'right-angled';

import { AppComponent }  from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [RTListModule]
})
export class AppModule { }
