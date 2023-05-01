import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { DivingService } from '../shared/services/diving.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: any = sessionStorage.getItem('UD');
  user$!: Observable<any>;
  constructor(private _divingService: DivingService , private router: Router) {
    this.user$ = this._divingService.getUser(this.userId);
  }

  ngOnInit(): void {}

  logout() {
    sessionStorage.removeItem('UD');
    sessionStorage.removeItem('TOKEN');
    this.router.navigate(['/'])
    
  }
}
