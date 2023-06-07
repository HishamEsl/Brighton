import { Component, OnInit } from '@angular/core';
import { DivingService } from '../shared/services/diving.service';
import { AuthService } from '../shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  dives$ = this._divingService.dives$;
  isAdmain!: boolean;
  constructor(
    private _divingService: DivingService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.dives$ = this._divingService.dives$;
    const userRoles = this._auth.getUserRoles();
    if (userRoles.includes('Admin')) {
      this.isAdmain = true;
    }
  }

  //On Remove Gallery  - Admin Only

  onRemoveGalleryClicked(divId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._divingService.removeDiveGallery(divId).subscribe(() => {
          Swal.fire('Deleted!', 'Your dive has been deleted.', 'success');
          this.dives$ = this._divingService.dives$;
        });
      }
    });
  }
}
