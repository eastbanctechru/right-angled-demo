import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { ListRequest, ListResponse, SortDirection } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';
import { AirportsListRequest } from './airports-list-request';

@Injectable()
export class AirportsService {
    private airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    public getAirports(): Observable<Airport[]> {
        // we use optional "delay" parameter to simulate backend latency
        return this.http.get(this.airportsUrl)
            .map(response => (response.json().airports as Airport[]))
            .delay(500);
    }
    public getSortedAirports(request: ListRequest): Observable<Airport[]> {
        return this.getAirports().map(airports => this.applySortings(request, airports));
    }
    public getFilteredAirports(request: AirportsListRequest): Observable<Airport[]> {
        return this.getSortedAirports(request).map(airports => this.applyFilters(request, airports));
    }
    public getAirportsList(request: AirportsListRequest): Observable<ListResponse<Airport>> {
        return this.getFilteredAirports(request)
            .map(airports => this.applyPaging(request, airports));
    }
    private applySortings(request: ListRequest, data: Airport[]): Airport[] {
        let fieldNames = request.sortings.map(sort => (sort.fieldName));
        let directions = request.sortings.map(sort => (sort.direction === SortDirection.Asc ? 'asc' : 'desc'));
        return _.orderBy(data, fieldNames, directions);
    }

    private applyFilters(request: AirportsListRequest, airports: Airport[]): Airport[] {
        return _.chain(airports)
            .filter(item => !request.airportName || item.name.toLowerCase().indexOf(request.airportName.toLowerCase()) !== -1)
            .filter(item => request.size === null || request.size === undefined || (item.size === null && request.size === '') || item.size === request.size)
            .filter(item => !request.type || item.type === request.type)
            .filter(item => !request.regionName || item.region === request.regionName)
            .filter(item => !request.cityName || item.cityName === request.cityName)
            .filter(item => !request.countryName || item.countryName === request.countryName)
            .forEach(item => { (item as any).selected = false; })
            .value();
    }
    private applyPaging(request: ListRequest, airports: Airport[]): ListResponse<Airport> {
        let skip = request.skip || 0;
        let take = request.take || airports.length;
        let resultRecords = _.slice(airports, skip, skip + take);

        return {
            items: resultRecords,
            loadedCount: resultRecords.length,
            totalCount: airports.length
        } as ListResponse<Airport>;
    }
}
