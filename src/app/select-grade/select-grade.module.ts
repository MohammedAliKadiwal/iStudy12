import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectGradePageRoutingModule } from './select-grade-routing.module';

import { SelectGradePage } from './select-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectGradePageRoutingModule
  ],
  declarations: [SelectGradePage]
})
export class SelectGradePageModule {}
