import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(title: string, id: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const titleControl = control.get(title);
    const idControl = control.get(id);

    if (!titleControl?.value && !idControl?.value) {
      return { isRequired: true };
    }
    return null;
  };
}