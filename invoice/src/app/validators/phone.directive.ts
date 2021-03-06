import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PhoneValidator } from './phone.validator';

@Directive({
  selector: '[phone][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true}]
})
export class PhoneDirective implements Validator {

  private validator = PhoneValidator();

  validate(c: AbstractControl): { [key: string]: any} {
      return this.validator(c);
  }

}
