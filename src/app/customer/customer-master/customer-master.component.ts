import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CountryService } from "../customer-address/countries.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-customer-master",
  templateUrl: "./customer-master.component.html",
  styleUrls: ["./customer-master.component.css"]
})
export class CustomerMasterComponent implements OnInit {
  theForm: FormGroup;
  countries$: Observable<any[]>;
  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.countries$ = this.countryService.getCounties();
  }

  private buildForm() {
    this.theForm = this.fb.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      age: [, Validators.min(0)],
      gender: [],
      email: [, Validators.email],
      phone: this.fb.group({
        areaCode: [],
        phoneNumber: []
      }),
      address: this.fb.group({
        street: [, Validators.required],
        number: [, [Validators.required, Validators.min(0)]],
        postal: [, Validators.required],
        country: []
      }),
      creditCards: this.fb.array([this.initCreditCard()])
    });
  }

  initCreditCard() {
    return this.fb.group({
      name: [],
      number: [],
      ccv: []
    });
  }
}
