import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CountryModel } from '../country.model';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailComponent implements OnInit {

  addressFormGroup: FormGroup;

  @Input()
  countries: CountryModel[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressFormGroup = this.initAddressFormModel();
  }

  private initAddressFormModel() {
    return this.fb.group({
      street: [, Validators.required],
      number: [, [Validators.required, Validators.min(0)]],
      postal: [, Validators.required],
      country: []
    });
  }
}
