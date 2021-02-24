import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicsPageRoutingModule } from './physics-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { PhysicsPage } from './physics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    PhysicsPageRoutingModule
  ],
  declarations: [PhysicsPage]
})
export class PhysicsPageModule {}
