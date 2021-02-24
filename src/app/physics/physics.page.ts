import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.page.html',
  styleUrls: ['./physics.page.scss'],
})
export class PhysicsPage implements OnInit {

  physics: any = "videos";
  ActiveTabes: any = "videos";
  currentTabs: any = "videos";

  constructor(
    private navCtrl: NavController,
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

  instruction()  {
    this.router.navigate(['/instruction']);
  }

  back() {
    this.navCtrl.pop();
  }
}
