import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }

}
