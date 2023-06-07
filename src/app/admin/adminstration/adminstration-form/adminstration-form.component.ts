import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from 'src/app/shared/services/diving.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-adminstration-form',
  templateUrl: './adminstration-form.component.html',
  styleUrls: ['./adminstration-form.component.scss'],
})
export class AdminstrationFormComponent implements OnInit {
  adminForm!: FormGroup;
  errorMessage!: any;
  role$ = this._divingService.role$;
  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    /* Init Form */
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      roleId: ['', [Validators.required]],
    });
  }

  onAddAdmin() {
    const obj = {
      email: this.adminForm.controls['email'].value,
      roleId: this.adminForm.controls['roleId'].value,
    };

    this._divingService
      .postassignroleURL(obj)
      .pipe(
        catchError((error) => {
          // Handle login error here
          this.errorMessage = error.error;
          return throwError(error);
        })
      )
      .subscribe(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' User Role has been Created ',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  get f() {
    return this.adminForm.controls;
  }
}
