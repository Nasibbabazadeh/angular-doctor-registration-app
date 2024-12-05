import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default function matchPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const passwordValue = control.get('password')?.value
        const repeatPasswordValue = control.get('repeatPassword')?.value

        return passwordValue != repeatPasswordValue ? {
            noMatchPasswords: true
        } : null
    }

}