import { RouterModule } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { CardmethodComponent } from './cardmethod/cardmethod.component';
import { CardbynumComponent } from './cardbynum/cardbynum.component';

export const cardRoutes = [
    {
        path: '',
        redirectTo: 'cardlist',
        pathMatch: 'full'
    },
    {
        path: 'cardmethod',
        component: CardmethodComponent
    },
    {
        path: 'cardlist',
        component: CardListComponent
    },
    {
        path: 'cardbynum',
        component: CardbynumComponent
    }
]