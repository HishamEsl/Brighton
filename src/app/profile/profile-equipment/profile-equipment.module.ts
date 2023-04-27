import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEquipmentRoutingModule } from './profile-equipment-routing.module';
import { ProfileEquipmentComponent } from './profile-equipment.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ProfileEquipmentComponent,
    FormComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProfileEquipmentRoutingModule
  ]
})
export class ProfileEquipmentModule { }
