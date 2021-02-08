import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectGradePage } from './select-grade.page';

const routes: Routes = [
  {
    path: '',
    component: SelectGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectGradePageRoutingModule {}
