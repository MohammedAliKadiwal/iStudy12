import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  message = 'Let me recommend you this application';
  url = 'https://play.google.com/store/apps/details?id=com.study.istudy12';

  slideVideoOpts = {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 1,
    pager: false,
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
    private platform: Platform,
    private socialSharing: SocialSharing,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  maths() {
    console.log('Maths');
  }
  chemistry() {
    console.log('Chemistry');
  }
  biology() {
    console.log('Biology');
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

  details() {
    this.router.navigate(['/teacher-details']);
  }

  pdf() {
    this.router.navigate(['/pdf']);
  }
  
  video() {
    this.router.navigate(['/video']);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  async share()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.share(this.message, null, null, this.url)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
         });

      });
   }

}
