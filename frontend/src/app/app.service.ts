import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface WeatherData {
  temperature: number [];
  uv: number [];
  pressure: number [];
  humidity: number [];
}

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getHospitalWards(): Observable<WeatherData> {
    // return this.http.get<WeatherData []>('http://localhost:8000/api');
    return of({
      temperature: [22 , 23.1, 24, 27, 34],
      uv: [23, 64, 56, 75],
      pressure: [435, 435, 547, 234],
      humidity: [446, 546, 5754, 1221]
    });
  }
}
