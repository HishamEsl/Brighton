import { Component, OnInit } from '@angular/core';
import { DivingService } from 'src/app/shared/services/diving.service';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.scss'],
})
export class AdminstrationComponent implements OnInit {
  admins$ = this._divingService.admins$;
  
  constructor(private _divingService: DivingService) {}

  ngOnInit(): void {}

  onRemoveAdmin() {}
}
