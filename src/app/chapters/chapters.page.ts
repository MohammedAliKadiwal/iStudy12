import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  close() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

}
