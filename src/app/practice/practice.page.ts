import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {

  subjects: any = "maths";
  ActiveTabes: any = "maths";
  currentTabs: any = "maths";

  constructor(
    private statusBar: StatusBar,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

}
