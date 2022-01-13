import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'bar-chart',
  styles: [],
  template: `
  <div [chart]="chart"></div>
  `,
})
export class BarChartComponent implements OnInit {
  constructor() {}

  chart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Cricket Score',
    },
    xAxis: {
      categories: ['Sachin', 'Yuvraj', 'Dhoni'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'India Score',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'India ',
        type: 'bar',
        color: '#0000ff',
        data: [100, 90, 45],
      },
    ],
  });

  ngOnInit() {}
}
