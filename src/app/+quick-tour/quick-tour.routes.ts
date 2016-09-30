import { Routes } from '@angular/router';

import { QuickTourComponent } from './quick-tour.component';

export const QuickTourRoutes: Routes = [
    {
        component: QuickTourComponent,
        path: ''
    },
    {
        component: QuickTourComponent,
        path: 'quick-tour'
    }
];
