import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { CountryModel } from "../country.model";

@Component({
  selector: "app-customer-address",
  templateUrl: "./customer-address.component.html",
  styleUrls: ["./customer-address.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  addressFormGroup: FormGroup;

  @Input()
  countries: CountryModel[];

  constructor() {}

  ngOnInit() {}
}
