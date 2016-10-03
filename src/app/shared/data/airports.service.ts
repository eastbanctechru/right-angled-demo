import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { SortDirection } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';
import { AirportsListRequest } from './airports-list-request';
import { AirportsPagedListRequest } from './airports-paged-list-request';
import { ListResponse } from './list-response';

@Injectable()
export class AirportsService {
    private airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    public getAirportsList(request: AirportsListRequest, delay: number = 500): Observable<Airport[]> {
        return this
            .getAllAirports()
            .map(airports => this.applyFilters(request, airports))
            .map(airports => this.applySortings(request, airports));
    }
    public getAirportsPagedList(request: AirportsPagedListRequest, delay: number = 500): Observable<ListResponse> {
        return this.getAirportsList(request).map(airports => this.applyPaging(request, airports));
    }

    private getAllAirports(): Observable<Airport[]> {
        // we use optional "delay" parameter to simulate backend latency
        return this.http.get(this.airportsUrl)
            .map(response => (response.json().airports as Airport[]))
            .map(airports => this.makeItemsSelectable(airports))
            .delay(500);
    }

    private applySortings(request: AirportsListRequest, data: Airport[]): Airport[] {
        let fieldNames = request.sortings.map(sort => (sort.fieldName));
        let directions = request.sortings.map(sort => (sort.direction === SortDirection.Asc ? 'asc' : 'desc'));
        return _.orderBy(data, fieldNames, directions);
    }

    private makeItemsSelectable(data: Airport[]): Airport[] {
        return _.forEach(data, item => { (item as any).selected = false; });
    }

    private applyFilters(request: AirportsListRequest, airports: Airport[]): Airport[] {
        return _.chain(airports)
            .filter(item => !request.airportName || item.name.toLowerCase().indexOf(request.airportName.toLowerCase()) !== -1)
            .filter(item => request.airportSize === null || request.airportSize === undefined || (item.size === null && request.airportSize === '') || item.size === request.airportSize)
            .filter(item => !request.airportType || item.type === request.airportType)
            .forEach(item => { (item as any).selected = false; })
            .value();
    }
    private applyPaging(request: AirportsPagedListRequest, airports: Airport[]): ListResponse {
        let skip = request.skip || 0;
        let take = request.take || airports.length;
        let resultRecords = _.slice(airports, skip, skip + take);

        return {
            items: resultRecords,
            loadedCount: resultRecords.length,
            totalCount: airports.length
        } as ListResponse;
    }
}
