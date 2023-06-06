import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivingService } from 'src/app/shared/services/diving.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  imageForm!: FormGroup;
  imageUrl!: string;
  base64String!: string;

  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService
  ) {}

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      image: ['', [Validators.required]],
    });
  }

  onAddImageSubmit() {}

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

  get f() {
    return this.imageForm.controls;
  }
}
