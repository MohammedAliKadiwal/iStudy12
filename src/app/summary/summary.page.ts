import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  @ViewChild('pieChart') private pieChart: ElementRef;

  pieCharts: any;

  subjects: any = "all";
  ActiveTabes: any = "all";
  currentTabs: any = "all";

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
  ) { 
  }

  ionViewWillEnter() {  
    // this.createPieChart();  
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  // ionViewDidEnter() {
  //   this.createPieChart();
  // }

  ngAfterViewInit() {
    this.createPieChart();
  }

  ngOnInit() {
  }

  close() {
    this.navCtrl.pop();
  }

  submit() {
    this.router.navigate(['/report']);
  }

  createPieChart() {
    this.pieCharts = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        datasets: [{
          data: [35, 15, 50],
          backgroundColor: [
            'green',
            'red',
            'gray',
          ],
        }]
      },
      options: {
        height: 100,
        width: 100
      },
    });
  }

}
