import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CountryService } from '../customer-address/countries.service';
import { CustomerDetailComponent } from '../customer-address/customer-address.component';
import { CustomerBasicComponent } from '../customer-basic/customer-basic.component';
import { CustomerCreditCardsComponent } from '../customer-credit-cards/customer-credit-cards.component';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {

  theForm: FormGroup;
  countries$: Observable<any[]>;

  @ViewChild(CustomerBasicComponent) customerBasicComponent;
  @ViewChild(CustomerCreditCardsComponent) customerCreditCardsComponent;
  @ViewChild(CustomerDetailComponent) customerDetailComponent;

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
    this.countries$ = this.countryService.getCounties();
  }


  private buildForm() {
    this.theForm = this.fb.group({
      basic: this.fb.group({}),
      address: this.fb.group({}),
      creditCards: this.fb.array([])
    });
  }

}
