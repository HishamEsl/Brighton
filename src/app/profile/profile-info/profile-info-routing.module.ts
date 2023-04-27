import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInfoComponent } from './profile-info.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  // { path: '', component: ProfileInfoComponent },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileInfoRoutingModule {}
