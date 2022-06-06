import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { HoursValidator } from "./hours.validator";


@Directive({
    selector: '[hours][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: HoursDirective, multi: true}]
})
export class HoursDirective implements Validator {
    private validator = HoursValidator;

    validate(c: AbstractControl): { [key: string]: any} {
        return this.validator(c);
    }
}