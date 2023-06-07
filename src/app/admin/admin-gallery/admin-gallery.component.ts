import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IImage } from 'src/app/shared/models/image.model';
import { DivingService } from 'src/app/shared/services/diving.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss'],
})
export class AdminGalleryComponent implements OnInit {
  galleryForm!: FormGroup;
  imageUrl!: string;
  selectedId!: number;
  imagesOption!: IImage[];
  images$ = this._divingService.images$;
  constructor(
    private formBuilder: FormBuilder,
    private _divingService: DivingService
  ) {}

  onAddGallery() {
    const obj = {
      imageId: this.galleryForm.controls['imageId'].value,
      description: this.galleryForm.controls['description'].value,
    };

    this._divingService.postDive(obj).subscribe((e) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gallery Image has been Created ',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  onFileSelected(event: any) {}

  ngOnInit(): void {
    this._divingService.images$.subscribe((images: any) => {
      this.imagesOption = images;
    });

    this.galleryForm = this.formBuilder.group({
      imageId: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  getImagePath(id: number) {}

  get f() {
    return this.galleryForm.controls;
  }
}
