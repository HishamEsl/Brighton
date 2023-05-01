import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DivingService } from '../shared/services/diving.service';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isColapsed = true;
  isProfileModule = false;
  isAuthModule = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProfileModule = this.router.url.includes('profile');
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthModule = this.router.url.includes('auth');
      }
    });
  }
}
