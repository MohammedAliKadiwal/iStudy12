import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicsPageRoutingModule } from './physics-routing.module';

import { PhysicsPage } from './physics.page';
import { ExpandableComponent } from '../component/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicsPageRoutingModule
  ],
  declarations: [PhysicsPage, ExpandableComponent]
})
export class PhysicsPageModule {}
