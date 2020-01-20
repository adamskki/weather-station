import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface WeatherData {
  temperature: number [];
  uv: number [];
  pressure: number [];
  humidity: number [];
}

export interface Humidity {
  humidity: number;
}

export interface Temperature {
  temperature: number;
}

export interface Pressure {
  pressure: number;
}

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private http: HttpClient) {
  }

  // getData(): Observable<WeatherData> {
  //   // return this.http.get<WeatherData []>('http://localhost:8000/api');
  //   return of({
  //     temperature: [22 , 23.1, 24, 27, 34],
  //     uv: [23, 64, 56, 75],
  //     pressure: [435, 435, 547, 234],
  //     humidity: [446, 546, 5754, 1221]
  //   });
  // }

  getHumidity(): Observable<Humidity []> {
    return this.http.get<Humidity []>('http://localhost:8000/api/humidity');
  }

  getTemperature(): Observable<Temperature []> {
    return this.http.get<Temperature []>('http://localhost:8000/api/temperature');
  }

  getPressure(): Observable<Pressure []> {
    return this.http.get<Pressure []>('http://localhost:8000/api/pressure');
  }
}
