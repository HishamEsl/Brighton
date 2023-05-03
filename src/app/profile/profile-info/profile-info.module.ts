import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInfoRoutingModule } from './profile-info-routing.module';
import { ProfileInfoComponent } from './profile-info.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProfileInfoComponent, FormComponent, ContentComponent],
  imports: [CommonModule, ProfileInfoRoutingModule, SharedModule],
})
export class ProfileInfoModule {}
