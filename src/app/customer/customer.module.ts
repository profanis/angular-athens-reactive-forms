import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerDetailComponent } from './customer-address/customer-address.component';
import { CustomerBasicComponent } from './customer-basic/customer-basic.component';
import { CustomerCreditCardsComponent } from './customer-credit-cards/customer-credit-cards.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [CustomerMasterComponent, CustomerDetailComponent, CustomerCreditCardsComponent, CustomerBasicComponent],
  exports: [CustomerMasterComponent]
})
export class CustomerModule {}
