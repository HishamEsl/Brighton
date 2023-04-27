import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileQualificationsComponent } from './profile-qualifications.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  // { path: '', component: ProfileQualificationsComponent },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileQualificationsRoutingModule {}
