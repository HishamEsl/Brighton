import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ImageComponent } from './image/image.component';
import { TeamComponent } from './team/team.component';
import { TeamFormComponent } from './team/team-form/team-form.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'image', pathMatch: 'full' },
      { path: 'image', component: ImageComponent },
      { path: 'team', component: TeamComponent },
      { path: 'teamForm', component: TeamFormComponent },
      { path: 'adminstration', component: AdminstrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
