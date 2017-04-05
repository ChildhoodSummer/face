import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'card',
        pathMatch: 'full'
    },
     {
        path: 'card',
        loadChildren:'./card/card.module#CardModule'
    }
]