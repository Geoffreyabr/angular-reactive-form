import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeDateValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const yearControl: number = control.value;
    if (yearControl > max || yearControl < min) {
      return {
        min: { value: control.value, expect: { min: min, max: max } },
      };
    } else {
      return null;
    }
  };
}
