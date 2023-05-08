import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './validation.mustconfirm';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage!: string;
  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* Init  Form */
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            ),
          ],
        ],
        confirmpwd: ['', [Validators.required]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^07\d{9}$/)],
        ],
      },
      {
        validator: MustMatch('password', 'confirmpwd'),
      }
    );
  }

  onRegisterClick() {
    const obj = {
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      userName: this.registerForm.controls['userName'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      phoneNumber: this.registerForm.controls['phoneNumber'].value,
    };

    this._authService
      .register(obj)
      .pipe(
        catchError((error) => {
          // Handle login error here
          this.errorMessage = error.error;
          return throwError(error);
        })
      )
      .subscribe((e: any) => {
        sessionStorage.setItem('TOKEN', e.token);
        this.router.navigate(['/']);
      });
  }

  get f() {
    return this.registerForm.controls;
  }
}
