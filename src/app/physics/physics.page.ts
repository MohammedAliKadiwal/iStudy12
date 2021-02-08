import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.page.html',
  styleUrls: ['./physics.page.scss'],
})
export class PhysicsPage implements OnInit {

  physics: any = "videos";
  ActiveTabes: any = "videos";
  currentTabs: any = "videos";

  items: any = new Array(10);

  itemExpanded: boolean = false
  itemExpandHeight: number = 200;

  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
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

  expandItem(item) {
    item.expanded = !item.expanded;
  }
}
