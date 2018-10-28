import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditCardsComponent } from './customer-credit-cards.component';

describe('CustomerCreditCardsComponent', () => {
  let component: CustomerCreditCardsComponent;
  let fixture: ComponentFixture<CustomerCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
