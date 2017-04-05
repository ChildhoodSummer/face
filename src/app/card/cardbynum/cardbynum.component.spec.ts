import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbynumComponent } from './cardbynum.component';

describe('CardbynumComponent', () => {
  let component: CardbynumComponent;
  let fixture: ComponentFixture<CardbynumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbynumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbynumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
