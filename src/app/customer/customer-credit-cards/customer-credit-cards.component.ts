import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-customer-credit-cards",
  templateUrl: "./customer-credit-cards.component.html",
  styleUrls: ["./customer-credit-cards.component.css"]
})
export class CustomerCreditCardsComponent implements OnInit {
  @Input()
  creditCardsFormArray: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.creditCardsFormArray.push(this.initCreditCard());
  }

  addCreditCard() {
    const control = this.creditCardsFormArray;
    control.push(this.initCreditCard());
  }

  removeCreditCard(index: number) {
    const control = this.creditCardsFormArray;
    control.removeAt(index);
  }


  showDeleteButton(index: number) {
    return index > 0 || this.creditCardsFormArray.length === 1;
  }


  private initCreditCard() {
    return this.fb.group({
      cardAlias: [],
      cardHolderName: [],
      cardNumber: [],
      ccv: []
    });
  }

}
