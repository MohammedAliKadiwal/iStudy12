import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  sliderOptions = {
    zoom: false,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    loopFillGroupWithBlank: true,
  };

  constructor(
    private router: Router,
    private statusBar: StatusBar,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  physics() {
    this.router.navigate(['/physics']);
  }

  select() {
    this.router.navigate(['/select-grade']);
  }

  notification() {
    this.router.navigate(['/notification']);
  }

  view() {
    this.router.navigate(['/recommend']);
  }

}
