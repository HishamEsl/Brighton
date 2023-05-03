import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user.model';
import { DivingService } from 'src/app/shared/services/diving.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  editMode: boolean = true;
  userId: any = sessionStorage.getItem('UD');
  infoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      // Implmint Info Form
      name: [''],
      memebershipNumber: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      nationality: [''],
    });

    this._checkEditMode();
  }

  onSubmitClicked() {
    const obj: IUser = {
      name: this.infoForm.controls['name'].value,
      memebershipNumber: this.infoForm.controls['memebershipNumber'].value,
      email: this.infoForm.controls['email'].value,
      phoneNumber: this.infoForm.controls['phoneNumber'].value,
      address: this.infoForm.controls['address'].value,
      nationality: this.infoForm.controls['nationality'].value,
    };

    this._divingService.updateUser(this.userId, obj).subscribe((e) => {
      this.location.back();
    });
  }

  private _checkEditMode() {
    this._divingService.getUser(this.userId).subscribe((user: any) => {
      console.log(user);
      this.infoForm.setValue({
        name: user.name,
        memebershipNumber: user.memebershipNumber,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        nationality: user.nationality,
      });
    });
  }

  get f() {
    return this.infoForm.controls;
  }
}
