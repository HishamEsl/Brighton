import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEquipmentComponent } from './profile-equipment.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  // { path: '', component: ProfileEquipmentComponent },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEquipmentRoutingModule {}
