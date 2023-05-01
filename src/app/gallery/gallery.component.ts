import { Component, OnInit } from '@angular/core';
import { DivingService } from '../shared/services/diving.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  dives$ = this._divingService.dives$;
  constructor(private _divingService: DivingService) {}

  ngOnInit(): void {}
}
