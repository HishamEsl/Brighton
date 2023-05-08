import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IQualifications } from 'src/app/shared/models/profileQualification.model';
import { DivingService } from 'src/app/shared/services/diving.service';

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

  ngOnInit(): void {
    this.qualifications$.subscribe((qualifications: IQualifications[]) => {
      if (qualifications.length > 0) {
        this.selectedQualification = qualifications[0]; // Set the initial value to the first index
      }
    });
  }
}
