import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { HintComponent } from '../components/hint/hint.component';
import { QueComponent } from '../components/que/que.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  // slideQueOpts = {
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   spaceBetween: 0,
  //   pager: false,
  //   loopFillGroupWithBlank: true,
  // };

  answerVal: any;
  ans: number=0;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {  
    // this.answerVal = 'a';
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  async viewHint() {
    const modal = await this.modalCtrl.create({
      component: HintComponent,
      cssClass: 'hintModal'
      // showBackdrop: true,
      // mode:	"ios",
    });
    return await modal.present();
  }

  async queNo() {
    const modal = await this.modalCtrl.create({
      component: QueComponent,
      cssClass: 'queModal'
      // showBackdrop: true,
      // mode:	"ios",
    });
    return await modal.present();
  }

  answer(e) {
    this.answerVal = e;
    this.ans = 1;
    console.log("dataa", this.answerVal);
  }

  back() {
    this.navCtrl.pop();
  }

  summay() {
    this.router.navigate(['/summary']);
  }

}
