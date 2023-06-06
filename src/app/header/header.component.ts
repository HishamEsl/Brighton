import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isColapsed = true;
  isProfileModule = false;
  isAuthModule = false;
  isAdminModule = false;
  userName = sessionStorage.getItem('US');

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isProfileModule = this.router.url.includes('profile');
      }
      if (event instanceof NavigationEnd) {
        this.isAdminModule = this.router.url.includes('admin');
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthModule = this.router.url.includes('auth');
      }
      if (event instanceof NavigationEnd) {
        this.isAdminModule = this.router.url.includes('admin');
      }
    });
  }

  ngOnInit(): void {}

 
}
