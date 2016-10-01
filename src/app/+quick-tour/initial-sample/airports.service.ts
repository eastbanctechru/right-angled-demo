import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';

@Injectable()
export class AirportsService {
    airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    getAirports(): Observable<Airport[]> {
        // we'll use "delay" parameter to simulate backend latency
        return this.http.get(this.airportsUrl)
            .map(response => (response.json().airports as Airport[]))
            .delay(500).publish();
    }
}
