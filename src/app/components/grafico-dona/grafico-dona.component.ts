import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import {  Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles:[]
})
export class GraficoDonaComponent implements OnInit {

   @Input('ChartLabels') public doughnutChartLabels: Label[] = [];
   @Input('ChartData') public doughnutChartData: number[] = [];
   @Input('CharType') public doughnutChartType: ChartType = 'doughnut';
   constructor() { }
   ngOnInit() {
   }
}
