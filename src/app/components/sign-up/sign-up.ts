import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signupForm = new FormGroup ({
    signupName: new FormControl('', {nonNullable:true}),
    signupEmail: new FormControl('', {nonNullable: true}),
    signupPassword: new FormControl('', {nonNullable: true}),
  });
  loginForm = new FormGroup ({
    loginEmail: new FormControl('', {nonNullable: true}),
    loginPassword: new FormControl('', {nonNullable: true}),
  });

}
