import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IQualifications } from 'src/app/shared/models/profileQualification.model';
import { DivingService } from 'src/app/shared/services/diving.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  userId: any = sessionStorage.getItem('UD');
  qualifications$!: Observable<any>;
  selectedQualification!: IQualifications;
  constructor(private _divingService: DivingService) {
    this.qualifications$ = this._divingService.profileQualifications(
      this.userId
    );
  }

  selectQualification(qualification: IQualifications) {
    this.selectedQualification = qualification;
  }

  onQulificationRemoveClicked(qulificationId: number) {
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
        this._divingService.deleteQulification(qulificationId).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'Your Qulification has been deleted.',
            'success'
          );
          this.qualifications$ = this._divingService.profileQualifications(
            this.userId
          );
        });
      }
    });
  }

  ngOnInit(): void {
    this.qualifications$.subscribe((qualifications: IQualifications[]) => {
      if (qualifications.length > 0) {
        this.selectedQualification = qualifications[0]; // Set the initial value to the first index
      }
    });
  }
}
