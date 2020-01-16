import {Component, OnInit} from '@angular/core';
import {AppService, WeatherData} from './app.service';
import * as CanvasJS from 'canvasjs';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf='loading'>
      <div class='header'>
        stacja pogodowa
      </div>
      <div id='chartContainer' style='height: 370px; width: 100%;'></div>
    </ng-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weatherData: WeatherData;
  loading: boolean = true;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.appService.getHospitalWards().subscribe(weatherData => {
      this.weatherData = weatherData;
      // const chart = new CanvasJS.Chart('chartContainer', {
      //   animationEnabled: true,
      //   exportEnabled: true,
      //   title: {
      //     text: 'Basic Column Chart in Angular'
      //   },
      //   data: [{
      //     type: 'column',
      //     dataPoints: [
      //       { y: 71, label: 'Apple' },
      //       { y: 55, label: 'Mango' },
      //       { y: 50, label: 'Orange' },
      //       { y: 65, label: 'Banana' },
      //       { y: 95, label: 'Pineapple' },
      //       { y: 68, label: 'Pears' },
      //       { y: 28, label: 'Grapes' },
      //       { y: 34, label: 'Lychee' },
      //       { y: 14, label: 'Jackfruit'}
      //     ]
      //   }]
      // });
      // chart.render();
      this.loading = false;
    });
  }
}
