import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { CustomerDetailComponent } from "./customer-address.component";

describe("CustomerDetailComponent", () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CustomerDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
