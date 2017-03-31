import { Component, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.fetch().subscribe(data => {this.weatherData = data});
  }

  weather() {
    return this.weatherData;
  }

}
