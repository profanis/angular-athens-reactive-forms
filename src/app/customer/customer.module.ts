import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerMasterComponent } from "./customer-master/customer-master.component";
import { CustomerDetailComponent } from "./customer-address/customer-address.component";
import { CustomerCreditCardsComponent } from './customer-credit-cards/customer-credit-cards.component';
import { CustomerBasicComponent } from './customer-basic/customer-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CustomerMasterComponent, CustomerDetailComponent, CustomerCreditCardsComponent, CustomerBasicComponent],
  exports: [CustomerMasterComponent]
})
export class CustomerModule {}
