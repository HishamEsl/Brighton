import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isSuperAdmain!: boolean;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    const userRoles = this._auth.getUserRoles();
    if (userRoles.includes('SuperAdmin')) {
      this.isSuperAdmain = true;
    }
  }
}
