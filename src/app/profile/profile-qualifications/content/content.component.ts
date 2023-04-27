import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  
})
export class ContentComponent implements OnInit {
  active = 'top';

  constructor() {}

  ngOnInit(): void {}
}
