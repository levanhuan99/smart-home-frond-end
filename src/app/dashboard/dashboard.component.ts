import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'];
   barChartType:string = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40,23,45,56,67,32], label: 'Phòng ngủ'},
    {data: [28, 48, 40, 19, 86, 27, 90,32,43,54,100,54], label: 'Phòng khách'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
