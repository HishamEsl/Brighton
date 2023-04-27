import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      {
        path: 'info',
        loadChildren: () =>
          import('./profile-info/profile-info.module').then(
            (m) => m.ProfileInfoModule
          ),
      },
      {
        path: 'qualifications',
        loadChildren: () =>
          import('./profile-qualifications/profile-qualifications.module').then(
            (m) => m.ProfileQualificationsModule
          ),
      },
      {
        path: 'equipment',
        loadChildren: () =>
          import('./profile-equipment/profile-equipment.module').then(
            (m) => m.ProfileEquipmentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
