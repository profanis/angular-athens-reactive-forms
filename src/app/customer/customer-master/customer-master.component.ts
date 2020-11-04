import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryService } from '../customer-address/countries.service';
import { CustomerDetailComponent } from '../customer-address/customer-address.component';
import { CustomerBasicComponent } from '../customer-basic/customer-basic.component';
import { CustomerCreditCardsComponent } from '../customer-credit-cards/customer-credit-cards.component';


@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit, AfterViewInit {

  formIsValid$: Observable<boolean>;
  countries$: Observable<any[]>;

  @ViewChild(CustomerBasicComponent, { static: true }) customerBasicComponent;
  @ViewChild(CustomerCreditCardsComponent, { static: true }) customerCreditCardsComponent;
  @ViewChild(CustomerDetailComponent, { static: true }) customerDetailComponent;

  constructor(
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.countries$ = this.countryService.getCounties();
  }

  ngAfterViewInit(): void {
    const statusIsTrue = map(status => status === 'VALID');

    const basicFormStatus = this.customerBasicComponent.basicFormGroup.statusChanges.pipe(
      statusIsTrue
    );

    const creditCardFormStatus = this.customerCreditCardsComponent.creditCardsFormArray.statusChanges.pipe(
      statusIsTrue
    );

    const addressFormStatus = this.customerDetailComponent.addressFormGroup.statusChanges.pipe(
      statusIsTrue
    );

    this.formIsValid$ = combineLatest([basicFormStatus,
                                      addressFormStatus,
                                      creditCardFormStatus]).pipe(
                                          map((statuses) => statuses.every(status => status === true))
                                      );
  }


}
