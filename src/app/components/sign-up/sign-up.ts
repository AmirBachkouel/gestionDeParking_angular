import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  constructor (private userService:UserService, private router:Router) {}

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

    this.userService.login(this.loginForm.value).subscribe((res: any) => {
        if (res) {
          alert('Login réussi !');
          this.router.navigate(['home']);
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      },
      (err) => {
        console.error(err);
        alert('Erreur lors de la connexion.');
      });
  }

  hasError(form: FormGroup, control: string, error: string): boolean {
    return undefined != (
      form.get(control)?.hasError(error) &&
      form.get(control)?.touched!
    );
  }
}
