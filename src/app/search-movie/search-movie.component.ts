import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeDateValidator } from '../validators/rangeValidator';
import { isRequiredValidator } from '../validators/isRequired';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  submitted = false;
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      identifiantTitleGroup: this.fb.group(
        {
          title: ['', Validators.required],
          identifiant: ['', Validators.required],
        },
        { validator: isRequiredValidator }
      ),

      type: ['series'],
      year: [
        '',
        [
          Validators.required,
          rangeDateValidator(1900, new Date().getFullYear()),
        ],
      ],
      fiche: ['courte', Validators.required],
    });
  }

  ngOnInit() {
    this.orderForm.patchValue({
      fiche: 'courte',
    });
    this.orderForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    // Get form value as JSON object
    console.log(this.orderForm.value);
    this.submitted = true;
  }
}
