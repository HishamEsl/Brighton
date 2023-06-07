import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ImageComponent } from './image/image.component';
import { SharedModule } from '../shared/shared.module';
import { TeamComponent } from './team/team.component';
import { TeamFormComponent } from './team/team-form/team-form.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminstrationFormComponent } from './adminstration/adminstration-form/adminstration-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    ImageComponent,
    TeamComponent,
    TeamFormComponent,
    AdminstrationComponent,
    AdminGalleryComponent,
    AdminstrationFormComponent,
    
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
