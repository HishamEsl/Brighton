import { Component, OnInit } from '@angular/core';
import { DivingService } from '../shared/services/diving.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  teams$ = this._divingService.teams$;
  constructor(private _divingService: DivingService) {}

  ngOnInit(): void {}
}
