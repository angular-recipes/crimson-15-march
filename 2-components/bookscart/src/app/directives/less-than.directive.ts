import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[lessThan]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LessThanDirective,
    multi: true
  }]
})
export class LessThanDirective implements Validator{
  @Input('lessThan') upperLimit: number;

  validate(control: AbstractControl) : ValidationErrors {
    console.log(control.value, this.upperLimit);
    if(control.value > +this.upperLimit) {
      return { lessThan: true };
    }
    return null;
  }

}
