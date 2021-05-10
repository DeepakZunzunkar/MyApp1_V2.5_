import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";
import { Key } from "protractor";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{

        provide: NG_VALIDATORS,//NG_VALIDATORS : this is called big token in angular ,it contain  list of all validator
        useExisting: confirmEqualValidatorDirective,
        multi: true

    }]

})
export class confirmEqualValidatorDirective implements Validator {

    //if validation succeed it return null ,if fails return object 
    validate(passwordGroup: AbstractControl): { [Key: string]: any } | null {
        
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');
        if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}