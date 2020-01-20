import {Component, OnInit} from '@angular/core';
import {AppService, WeatherData} from './app.service';

export interface NgxChartsConfig {
  view: any[];
  scheme: any;
  results: any[];
  gradient: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showLegend: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  autoScale: boolean;
  timeline: boolean;
}

export interface Serie {
  name: string;
  value: number;
}

@Component({
  selector: 'app-root',
  template: `
    <spinner *ngIf="loading"></spinner>
    <ng-container *ngIf="!loading">
      <div class="header-container">
        <p class="header">stacja pogodowa</p>
      </div>
      <div class="charts-grid">
        <ngx-charts-line-chart class="chart"
                               [view]="temperaturePlot.view"
                               [scheme]="temperaturePlot.scheme"
                               [results]="temperaturePlot.results"
                               [gradient]="temperaturePlot.gradient"
                               [xAxis]="temperaturePlot.showXAxis"
                               [yAxis]="temperaturePlot.showYAxis"
                               [legend]="temperaturePlot.showLegend"
                               [showXAxisLabel]="temperaturePlot.showXAxisLabel"
                               [showYAxisLabel]="temperaturePlot.showYAxisLabel"
                               [xAxisLabel]="temperaturePlot.xAxisLabel"
                               [yAxisLabel]="temperaturePlot.yAxisLabel"
                               [autoScale]="temperaturePlot.autoScale"
                               [timeline]="temperaturePlot.timeline">
        </ngx-charts-line-chart>
        <ngx-charts-line-chart class="chart"
                               [view]="humidity.view"
                               [scheme]="humidity.scheme"
                               [results]="humidity.results"
                               [gradient]="humidity.gradient"
                               [xAxis]="humidity.showXAxis"
                               [yAxis]="humidity.showYAxis"
                               [legend]="humidity.showLegend"
                               [showXAxisLabel]="humidity.showXAxisLabel"
                               [showYAxisLabel]="humidity.showYAxisLabel"
                               [xAxisLabel]="humidity.xAxisLabel"
                               [yAxisLabel]="humidity.yAxisLabel"
                               [autoScale]="humidity.autoScale"
                               [timeline]="humidity.timeline">
        </ngx-charts-line-chart>
        <ngx-charts-line-chart class="chart"
                               [view]="pressure.view"
                               [scheme]="pressure.scheme"
                               [results]="pressure.results"
                               [gradient]="pressure.gradient"
                               [xAxis]="pressure.showXAxis"
                               [yAxis]="pressure.showYAxis"
                               [legend]="pressure.showLegend"
                               [showXAxisLabel]="pressure.showXAxisLabel"
                               [showYAxisLabel]="pressure.showYAxisLabel"
                               [xAxisLabel]="pressure.xAxisLabel"
                               [yAxisLabel]="pressure.yAxisLabel"
                               [autoScale]="pressure.autoScale"
                               [timeline]="pressure.timeline">
        </ngx-charts-line-chart>
        <ngx-charts-line-chart class="chart"
                               [view]="uv.view"
                               [scheme]="uv.scheme"
                               [results]="uv.results"
                               [gradient]="uv.gradient"
                               [xAxis]="uv.showXAxis"
                               [yAxis]="uv.showYAxis"
                               [legend]="uv.showLegend"
                               [showXAxisLabel]="uv.showXAxisLabel"
                               [showYAxisLabel]="uv.showYAxisLabel"
                               [xAxisLabel]="uv.xAxisLabel"
                               [yAxisLabel]="uv.yAxisLabel"
                               [autoScale]="uv.autoScale"
                               [timeline]="uv.timeline">
        </ngx-charts-line-chart>
      </div>
    </ng-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weatherData: WeatherData;
  loading: boolean = true;

  plotCommonParameters: NgxChartsConfig = {
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    timeline: true,
    autoScale: true,
    view: [700, 500],
    xAxisLabel: 'numer pomiaru',
    scheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }
  } as NgxChartsConfig;

  temperaturePlot: NgxChartsConfig = {
    ...this.plotCommonParameters,
    yAxisLabel: 'Temperatura',
  };

  humidity: NgxChartsConfig = {
    ...this.plotCommonParameters,
    yAxisLabel: 'Wilgotność',
  };

  pressure: NgxChartsConfig = {
    ...this.plotCommonParameters,
    yAxisLabel: 'Ciśnienie',
  };

  uv: NgxChartsConfig = {
    ...this.plotCommonParameters,
    yAxisLabel: 'Uv',
  };


  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.appService.getTemperature().subscribe(temperature => {
      this.temperaturePlot.results = [{
        name: 'temperatura',
        series: temperature.map(
          (temp, index) => ({
              name: String(index),
              value: temp.temperature
            } as Serie
          ))
      }];
      this.appService.getHumidity().subscribe(humidity => {
        this.humidity.results = [{
          name: 'wilgotność',
          series: humidity.map(
            (hum, index) => ({
                name: String(index),
                value: hum.humidity
              } as Serie
            ))
        }];
        this.appService.getPressure().subscribe(pressure => {
          this.pressure.results = [{
            name: 'ciśnienie',
            series: pressure.map(
              (p, index) => ({
                  name: String(index),
                  value: p.pressure
                } as Serie
              ))
          }];
          this.loading = false;
        });
      });
    });
  }
}
