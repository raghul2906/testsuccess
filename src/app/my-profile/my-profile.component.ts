import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from './utils/validation';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  router: any;

  constructor(private formBuilder: FormBuilder ) {}




//   // City Names
// City: any = ['India', 'USA', 'UK', 'Australia','Sweden','Iceland']


// /*########### Form ###########*/
// registrationForm = this.formBuilder.group({
//   cityName: ['', [Validators.required]]
// })


// // Choose city using select dropdown
// changeCity(e) {
//   console.log(e.value)
//   this.cityName.setValue(e.target.value, {
//     onlySelf: true
//   })
// }

// // Getter method to access formcontrols
// get cityName() {
//   return this.form.get('cityName');
// }

ngOnInit(): void {
  this.form = this.formBuilder.group(
    {
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
    }
  );

}

get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

model : any ;


  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }


  onReset(): void {
    this.submitted = false;
    this.form.reset();
  } 

  onaddDetails(){



    if(this.form.valid){

    this.router.navigate(['/accountinformation']);

        }

     }

}


 



