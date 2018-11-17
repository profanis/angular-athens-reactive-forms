import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-basic',
  templateUrl: './customer-basic.component.html',
  styleUrls: ['./customer-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerBasicComponent {

  @Input()
  basicFormGroup: FormGroup;

}
