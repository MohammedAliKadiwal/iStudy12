import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionPageRoutingModule } from './instruction-routing.module';

import { InstructionPage } from './instruction.page';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    InstructionPageRoutingModule
  ],
  declarations: [InstructionPage]
})
export class InstructionPageModule {}
