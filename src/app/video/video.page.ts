import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  api;
  currentIndex = 0;
  playlist = [
    {
      title: 'Pale Blue Dot',
      image: '../../assets/images/placeholder.png',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      image: '../../assets/images/placeholder.png',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      image: '../../assets/images/placeholder.png',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];
  subscriptions: Subscription[] = [];
  currentItem = this.playlist[this.currentIndex];
  constructor() { }

  ngOnInit() {
  }
  onPlaybackReady() {
    // ...
  }

  // onClickPlaylistItem(item, index: number) {
  //   this.currentIndex = index;
  //   this.currentItem = item;
  // }


}
