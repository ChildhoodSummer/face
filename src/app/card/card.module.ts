import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { CardListComponent } from './card-list/card-list.component';
import { cardRoutes } from './card.routes';
import { CardService } from './card.service';
import { CardComponent } from '../card/card.component';
import { CardmethodComponent } from './cardmethod/cardmethod.component';
import { CardbynumComponent } from './cardbynum/cardbynum.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cardRoutes),
    FormsModule
  ],
  declarations: [
    CardListComponent,
    CardComponent,
    CardmethodComponent,
    CardbynumComponent
  ],
  providers: [
    CardService
  ]
})
export class CardModule { }
