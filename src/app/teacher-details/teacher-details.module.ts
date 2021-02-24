import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherDetailsPageRoutingModule } from './teacher-details-routing.module';

import { TeacherDetailsPage } from './teacher-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherDetailsPageRoutingModule
  ],
  declarations: [TeacherDetailsPage]
})
export class TeacherDetailsPageModule {}
