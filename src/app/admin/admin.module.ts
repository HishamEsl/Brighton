import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ImageComponent } from './image/image.component';
import { SharedModule } from '../shared/shared.module';
import { TeamComponent } from './team/team.component';
import { TeamFormComponent } from './team/team-form/team-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    ImageComponent,
    TeamComponent,
    TeamFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
