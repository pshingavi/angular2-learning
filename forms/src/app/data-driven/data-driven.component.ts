import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;  // Make it more useful. See constructor

  genders = ['male','female'];

  constructor(private formBuilder: FormBuilder) {
    // For heavy lifting do this in ngOnInit
    /**this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('pshingavi', Validators.required),// Key can be non quoted but to avoid minification errors or use special chars, use quotes
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking')  // Angular attaches indexes starting 0
      ])
    });**/

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['pshingavi', [Validators.required, this.exampleValidator]],// Key can be non quoted but to avoid minification errors or use special chars, use quotes
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required]  // Angular attaches indexes starting 0
      ])
    });


  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls["hobbies"]).push(new FormControl('', Validators.required));
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value == "Example") {
      return {example: true};  // Invalidate the input
    }
    return null;
  }

  ngOnInit() {
  }

}
