import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { AccuracyComponent } from '../components/accuracy/accuracy.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  @ViewChild('scoreBarChart') private scoreBarChart: ElementRef;
  @ViewChild('accuracyBarChart') private accuracyBarChart: ElementRef;
  @ViewChild('timeBarChart') private timeBarChart: ElementRef;
  scoreBars: any;
  accuracyBars: any;
  timeBars: any;

  subjects: any = "maths";
  ActiveTabes: any = "maths";
  currentTabs: any = "maths";

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
  ) { 
    
  }

  ngAfterViewInit() {
    this.scoreHrzBarChart();
    this.accuracyHrzBarChart();
    this.timeHrzBarChart()
  }

  scoreHrzBarChart() {
    this.scoreBars = new Chart(this.scoreBarChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Phy', 'Che', 'Mat'],
        datasets: [{
          label: 'View in Scores',
          data: [15, 25, 100],
          backgroundColor: 'green',
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  accuracyHrzBarChart() {
    this.accuracyBars = new Chart(this.accuracyBarChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Phy', 'Che', 'Mat'],
        datasets: [{
          label: 'View in Percentage',
          data: [30, 65, 100],
          backgroundColor: 'green',
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  timeHrzBarChart() {
    this.timeBars = new Chart(this.timeBarChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Phy', 'Che', 'Mat'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15],
          backgroundColor: [
            'blue',
            'pink',
            'orange',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  ngOnInit() {
  }

  close() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  async modalSheet(){
    const modal = await this.modalCtrl.create({
      component: AccuracyComponent,
      cssClass: 'accuracyModal'
      // showBackdrop: true,
      // mode:	"ios",
    });
    return await modal.present();
  }

  chapters() {
    this.router.navigate(['/chapters']);
  }

}
