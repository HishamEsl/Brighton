import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from '../shared/services/diving.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService
  ) {}

  ngOnInit(): void {
    /* Init Form */
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: [''],
    });
  }

  onContactSubmit() {
    const obj: any = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      phoneNumber: this.contactForm.controls['phone'].value,
      message: this.contactForm.controls['message'].value,
    };

    this._divingService.contactUsSendEmail(obj).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The email was successfully sent ',
        showConfirmButton: false,
        timer: 1500,
      });
    });

    this.contactForm.reset();
  }
  get f() {
    return this.contactForm.controls;
  }
}
