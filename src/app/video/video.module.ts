import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPage } from './video.page';
import { VimeModule } from '@vime/angular';
import { VideoPageRoutingModule } from './video-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VimeModule,
    VideoPageRoutingModule
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
