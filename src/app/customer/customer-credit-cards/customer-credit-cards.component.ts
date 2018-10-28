import { Component, Input, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-customer-credit-cards",
  templateUrl: "./customer-credit-cards.component.html",
  styleUrls: ["./customer-credit-cards.component.css"]
})
export class CustomerCreditCardsComponent implements OnInit {
  @Input()
  creditCardsFormArray: FormArray;

  constructor() {}

  ngOnInit() {}

  addCreditCard() {
    const control = this.creditCardsFormArray;
    // control.push(this.initCreditCard());
  }

  removeCreditCard(i: number) {
    const control = this.creditCardsFormArray;
    control.removeAt(i);
  }
}
