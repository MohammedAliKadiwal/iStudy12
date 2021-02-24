import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDetailsPage } from './teacher-details.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDetailsPageRoutingModule {}
