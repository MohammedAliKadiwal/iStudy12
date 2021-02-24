import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(
    private statusBar: StatusBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  classroom() {
    this.router.navigate(['/classroom']);
  }

  payment() {
    this.router.navigate(['/payment']);
  }

  youtube() {
    window.open("https://www.youtube.com/", "_system");
  }

  fb() {
    window.open("https://www.facebook.com/", "_system");
  }

  insta() {
    window.open("https://www.instagram.com/", "_system");
  }

  whatsApp() {
    window.open('https://api.whatsapp.com/send?phone=919409844400');
  }

  call() {
    window.open('tel:+919409844400', '_system', 'location=yes');
  }

  telegram() {
    console.log('Telegram');
  }

  email() {
    console.log('Email');
  }

  about() {
    this.router.navigate(['/about']);
  }

  terms() {
    this.router.navigate(['/about']);
  }

  privacy() {
    this.router.navigate(['/about']);
  }

}
