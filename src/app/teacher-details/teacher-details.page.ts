import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.page.html',
  styleUrls: ['./teacher-details.page.scss'],
})
export class TeacherDetailsPage implements OnInit {

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  back() {
    this.navCtrl.pop();
  }

}
