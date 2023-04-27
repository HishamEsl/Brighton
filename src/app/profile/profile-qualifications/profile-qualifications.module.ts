import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileQualificationsRoutingModule } from './profile-qualifications-routing.module';
import { ProfileQualificationsComponent } from './profile-qualifications.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProfileQualificationsComponent,
    ContentComponent,
    FormComponent,
  ],
  imports: [CommonModule, ProfileQualificationsRoutingModule, NgbNavModule],
})
export class ProfileQualificationsModule {}
