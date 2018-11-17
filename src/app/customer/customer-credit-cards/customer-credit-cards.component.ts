import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-credit-cards',
  templateUrl: './customer-credit-cards.component.html',
  styleUrls: ['./customer-credit-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCreditCardsComponent {

  @Input()
  creditCardsFormArray: FormArray;


  addCreditCard() {
  }

  removeCreditCard(index: number) {
  }


}
