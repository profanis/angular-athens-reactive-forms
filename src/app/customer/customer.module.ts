import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerMasterComponent } from "./customer-master/customer-master.component";
import { CustomerDetailComponent } from "./customer-address/customer-address.component";
import { CustomerCreditCardsComponent } from './customer-credit-cards/customer-credit-cards.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CustomerMasterComponent, CustomerDetailComponent, CustomerCreditCardsComponent],
  exports: [CustomerMasterComponent]
})
export class CustomerModule {}
