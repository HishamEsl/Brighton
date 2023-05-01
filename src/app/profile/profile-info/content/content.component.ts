import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DivingService } from 'src/app/shared/services/diving.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  userId: any = sessionStorage.getItem('UD');
  user$!: Observable<any>;
  
  constructor(private _divingService: DivingService) {
    this.user$ = this._divingService.getUser(this.userId);
  }

  ngOnInit(): void {}
}
