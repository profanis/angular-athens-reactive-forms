import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBasicComponent } from './customer-basic.component';

describe('CustomerBasicComponent', () => {
  let component: CustomerBasicComponent;
  let fixture: ComponentFixture<CustomerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
