import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /* Init Form */
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^01[0-9]{9}$')]],
      message: [''],
    });
  }

  onContactSubmit() {
    const obj: any = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      phone: this.contactForm.controls['phone'].value,
      message: this.contactForm.controls['message'].value,
    };

    console.log(obj);
  }
  get f() {
    return this.contactForm.controls;
  }
}
