import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicsPageRoutingModule } from './physics-routing.module';

import { PhysicsPage } from './physics.page';
// import { ExpandableModule } from '../component/expandable/expandable.module';
import { ExpandableComponent } from '../component/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ExpandableModule,
    PhysicsPageRoutingModule
  ],
  declarations: [PhysicsPage, ExpandableComponent]
})
export class PhysicsPageModule {}
