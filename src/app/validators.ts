import { FormControl } from '@angular/forms';

export function customValidator(ctrl: FormControl) {

    const valid = ctrl.value && parseInt(ctrl.value) < 10;

    return valid ? null : { customValidator: false }
}