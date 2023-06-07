import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;
  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* Init  Form */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLoginClick() {
    const user: any = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };
    this._authService
      .login(user)
      .pipe(
        catchError((error) => {
          // Handle login error here
          this.errorMessage = error.error;
          return throwError(error);
        })
      )
      .subscribe((e: any) => {
        console.log(e, 'user');
        sessionStorage.setItem('US', e.name);
        sessionStorage.setItem('TOKEN', e.token);
        sessionStorage.setItem('UD', e.userId);

        this.router.navigate(['/']);
      });
  }

  get f() {
    return this.loginForm.controls;
  }
}
