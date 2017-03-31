import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

//import { AppConfig } from '../app.config';

@Injectable()
export class WeatherService {

  constructor(private http: Http/*, private config: AppConfig*/) { }

  fetch() {
    return this.http.get(/*this.config.apiUrl*/'http://wttr.in/sydney').map((response: Response) => response.text());
  }
}
