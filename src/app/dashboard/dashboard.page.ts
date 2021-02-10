import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideVideoOpts = {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 1,
    pager: false,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loopFillGroupWithBlank: true,
  };

  slideDocOpts = {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 1,
    pager: false,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
