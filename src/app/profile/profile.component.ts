import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { DivingService } from '../shared/services/diving.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: any = sessionStorage.getItem('UD');
  user$!: Observable<any>;
  isAdmain!: boolean;
  base64String!: string;

  constructor(
    private _divingService: DivingService,
    private router: Router,
    private _auth: AuthService
  ) {
    this.user$ = this._divingService.getUser(this.userId);
  }

  ngOnInit(): void {
    const userRoles = this._auth.getUserRoles();
    if (userRoles.includes('Admin')) {
      this.isAdmain = true;
    }else if(userRoles.includes('SuperAdmin')){
      this.isAdmain = true;
    }
  }

  convertToBase64(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.base64String = reader.result as string;

      const obj = {
        path: this.base64String,
      };
      this._divingService.updateUserImage(this.userId, obj).subscribe((e) => {
        this.user$ = this._divingService.getUser(this.userId);
      });
      // You can use the base64String here or pass it to another function
    };

    reader.readAsDataURL(file);
  }

  logout() {
    sessionStorage.removeItem('UD');
    sessionStorage.removeItem('TOKEN');
    sessionStorage.removeItem('US');
    this.router.navigate(['/']);
  }
}
