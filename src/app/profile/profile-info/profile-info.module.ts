import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInfoRoutingModule } from './profile-info-routing.module';
import { ProfileInfoComponent } from './profile-info.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    FormComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProfileInfoRoutingModule
  ]
})
export class ProfileInfoModule { }
