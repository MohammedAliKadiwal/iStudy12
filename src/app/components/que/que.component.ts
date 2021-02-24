import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.scss'],
})
export class QueComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }  

}
