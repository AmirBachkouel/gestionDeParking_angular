import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup ({
      signupName: new FormControl(''),
      signupEmail: new FormControl(''),
      signupPassword: new FormControl(''),
    });
    this.loginForm = new FormGroup ({
      loginEmail: new FormControl(''),
      loginPassword: new FormControl(''),
    });
  }

  resetForms() {
    this.signupForm.reset();
    this.loginForm.reset();
  }

  submitLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    alert("Connection établie");
  }

  hasError(form: FormGroup, control: string, error: string): boolean {
    return undefined != (
      form.get(control)?.hasError(error) &&
      form.get(control)?.touched!
    );
  }
}
