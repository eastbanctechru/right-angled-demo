import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ListRequest, SortDirection } from 'right-angled';

import { Airport } from './airport';

@Injectable()
export class AirportsService {
    airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    private applySortings(request: ListRequest, data: Airport[]): Airport[] {
        let fieldNames = request.sortings.map(sort => (sort.fieldName));
        let directions = request.sortings.map(sort => (sort.direction === SortDirection.Asc ? 'asc' : 'desc'));
        return _.orderBy(data, fieldNames, directions);
    }

    getAirports(): Observable<Airport[]> {
        // we'll use "delay" parameter to simulate backend latency
        return this.http.get(this.airportsUrl)
            .map(response => (response.json().airports as Airport[]))
            .delay(500);
    }
    public getSortedAirports(request: ListRequest): Observable<Airport[]> {
        return this.getAirports().map(airports => this.applySortings(request, airports));
    }

}
