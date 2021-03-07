import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.scss'],
})
export class AccuracyComponent implements OnInit {

  @ViewChild('pieChart') private pieChart: ElementRef;

  pieCharts: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.createPieChart();
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