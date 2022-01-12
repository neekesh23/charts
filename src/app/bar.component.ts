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
      text: "John's Marks",
    },
    xAxis: {
      categories: ['Maths', 'English', 'Science', 'Arts'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Marks',
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
        name: 'John',
        type: 'bar',
        data: [80, 90, 100, 50],
      },
    ],
  });

  ngOnInit() {}
}
