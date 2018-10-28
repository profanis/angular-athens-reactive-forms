import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerMasterComponent } from "./customer-master.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerDetailComponent } from "../customer-address/customer-address.component";

describe("CustomerMasterComponent", () => {
  let component: CustomerMasterComponent;
  let fixture: ComponentFixture<CustomerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CustomerMasterComponent, CustomerDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a valid form", () => {
    // const firstName = component.theForm.get("firstName");
  });
});
