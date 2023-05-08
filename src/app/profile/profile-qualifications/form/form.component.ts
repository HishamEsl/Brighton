import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from 'src/app/shared/services/diving.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  qualificationForm!: FormGroup;

  imageUrl!: string;
  base64String!: string;
  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService,
    private location: Location
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  convertToBase64(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.base64String = reader.result as string;

      // You can use the base64String here or pass it to another function
    };

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    /* Init Form */
    this.qualificationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      padiNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      certificateDate: ['', [Validators.required]],
      instructorName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onAddQualificationSubmit() {
    const obj: any = {
      name: this.qualificationForm.controls['name'].value,
      padiNumber: +this.qualificationForm.controls['padiNumber'].value,
      certificateDate: this.qualificationForm.controls['certificateDate'].value,
      userId: sessionStorage.getItem('UD'),
      instructorName: this.qualificationForm.controls['instructorName'].value,
      location: this.qualificationForm.controls['location'].value,
      image: {
        path: this.base64String,
      },
      description: this.qualificationForm.controls['description'].value,
    };

    this._divingService.Postqualification(obj).subscribe((e) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Qualification has been Created ',
        showConfirmButton: false,
        timer: 1500,
      });

      this.location.back();
    });
  }

  get f() {
    return this.qualificationForm.controls;
  }
}




