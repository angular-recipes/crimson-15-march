import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[positiveNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PositiveNumberDirective,
    multi: true
  }]
})
export class PositiveNumberDirective implements Validator{

  validate(control: AbstractControl) : ValidationErrors {
    if(isNaN(control.value) || control.value < 0) {
      return { positiveNumber: true };
    }
    return null;
  }

}
