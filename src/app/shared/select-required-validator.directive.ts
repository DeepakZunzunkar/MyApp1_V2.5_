import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'
import { Directive } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [{

        provide: NG_VALIDATORS,//NG_VALIDATORS : this is called big token in angular ,it contain  list of all validator
        useExisting: SelectRequiredValidatorDirective,
        multi: true

    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    }
}