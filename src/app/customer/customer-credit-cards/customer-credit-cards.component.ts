import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-credit-cards',
  templateUrl: './customer-credit-cards.component.html',
  styleUrls: ['./customer-credit-cards.component.css']
})
export class CustomerCreditCardsComponent {

  @Input()
  creditCardsFormArray: FormArray;


  addCreditCard() {
  }

  removeCreditCard(index: number) {
  }


}
