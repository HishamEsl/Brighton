import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ImageComponent } from './image/image.component';
import { TeamComponent } from './team/team.component';
import { TeamFormComponent } from './team/team-form/team-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'image', pathMatch: 'full' },
      { path: 'image', component: ImageComponent },
      { path: 'team', component: TeamComponent },
      { path: 'teamForm', component: TeamFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
