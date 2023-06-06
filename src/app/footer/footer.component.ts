import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isAuthModule = false;
  isAdminModule = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthModule = this.router.url.includes('auth');
      }
      if (event instanceof NavigationEnd) {
        this.isAdminModule = this.router.url.includes('admin');
      }
    });
  }
}
