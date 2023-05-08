import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DivingService } from 'src/app/shared/services/diving.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  userId: any = sessionStorage.getItem('UD');
  euipments$!: Observable<any>;

  constructor(private _divingService: DivingService) {
    this.euipments$ = this._divingService.profileEquipments(this.userId);
  }

  onRemoveClick(equipmentId: number) {
    // this._divingService.deleteEquipment(equipmentId).subscribe();

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
        this._divingService.deleteEquipment(equipmentId).subscribe(() => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.euipments$ = this._divingService.profileEquipments(this.userId);
        });
      }
    });
  }

  ngOnInit(): void {}
}
