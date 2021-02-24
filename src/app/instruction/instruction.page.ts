import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {

  info: any = "syllabus";
  ActiveTabes: any = "syllabus";
  currentTabs: any = "syllabus";

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router,
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

  questions() {
    this.router.navigate(['/all-questions']);
  }

}
