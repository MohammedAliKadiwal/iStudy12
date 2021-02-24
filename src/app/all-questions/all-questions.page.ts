import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LeaveComponent } from '../components/leave/leave.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.page.html',
  styleUrls: ['./all-questions.page.scss'],
})
export class AllQuestionsPage implements OnInit {

  slideQueOpts = {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 0,
    pager: false,
    loopFillGroupWithBlank: true,
  };

  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  question()  {
    this.router.navigate(['/question']);
  }

  back() {
    this.navCtrl.pop();
  }

  async leave() {
    const modal = await this.modalCtrl.create({
      component: LeaveComponent,
      cssClass: 'leaveModal'
      // showBackdrop: true,
      // mode:	"ios",
    });
    return await modal.present();
  }

}
