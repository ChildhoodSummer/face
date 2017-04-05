import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmethodComponent } from './cardmethod.component';

describe('CardmethodComponent', () => {
  let component: CardmethodComponent;
  let fixture: ComponentFixture<CardmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
