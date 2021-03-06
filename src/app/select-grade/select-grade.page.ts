import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-grade',
  templateUrl: './select-grade.page.html',
  styleUrls: ['./select-grade.page.scss'],
})
export class SelectGradePage implements OnInit {

  constructor(
    private router: Router,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

  dashboard() {
    this.router.navigate(['/tabs/dashboard']);
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

}
