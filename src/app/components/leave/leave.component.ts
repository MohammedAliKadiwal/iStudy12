import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
})
export class LeaveComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {}

  resume() {
    this.modalCtrl.dismiss();
  }

  leave() {
    this.modalCtrl.dismiss();
    this.navCtrl.pop();
  }

}
