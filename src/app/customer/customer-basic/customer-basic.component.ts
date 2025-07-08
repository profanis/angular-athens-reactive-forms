import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-basic',
  templateUrl: './customer-basic.component.html',
  styleUrls: ['./customer-basic.component.css']
})
export class CustomerBasicComponent implements OnInit {

  basicFormGroup: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.basicFormGroup = this.initBasicFormModel();
  }

  private initBasicFormModel() {
    return this.fb.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      age: [, Validators.min(0)],
      gender: [],
      email: [, [Validators.required, Validators.email]],
      phone: this.fb.group({
        areaCode: [],
        phoneNumber: []
      })
    });
  }
}
