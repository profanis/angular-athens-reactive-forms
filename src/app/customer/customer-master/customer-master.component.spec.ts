import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerDetailComponent } from "../customer-address/customer-address.component";
import { CustomerMasterComponent } from "./customer-master.component";


describe("CustomerMasterComponent", () => {
  let component: CustomerMasterComponent;
  let fixture: ComponentFixture<CustomerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
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

  fit("should have a valid form", () => {
    component.theForm.patchValue({
      "basic": {
        "firstName": "John",
        "lastName": "Doe",
        "age": null,
        "gender": null,
        "email": "john@doe.com",
        "phone": {
          "areaCode": null,
          "phoneNumber": null
        }
      },
      "address": {
        "street": "Street name",
        "number": "66",
        "postal": "12345",
        "country": null
      },
      "creditCards": [
        { "cardAlias": "John", "cardHolderName": "Doe", "cardNumber": "90090921", "ccv": "097" }
      ]
    })
    expect(component.theForm.valid).toBeTruthy()
  });
});
