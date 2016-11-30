import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Airport } from './airport';
import { AirportsListRequest } from './airports-list-request';
import { AirportsPagedListRequest } from './airports-paged-list-request';
import { ListResponse } from './list-response';
import { SortDirection } from './sort-parameter';

@Injectable()
export class AirportsService {
  private airportsUrl: string = './assets/airports.json';
  private airportsCache: ReplaySubject<Airport[]> = new ReplaySubject<Airport[]>(1);
  constructor(private http: Http) {
  }
  public getAirportsList(request: AirportsListRequest, delay: number = 500): Observable<Airport[]> {
    return this
      .getAllAirports()
      .delay(delay)
      .map((airports) => _.cloneDeep(airports))
      .map((airports) => this.applyFilters(request, airports))
      .map((airports) => this.applySortings(request, airports))
      .map((airports) => airports.slice(0, 5));
  }
  public getAirportsPagedList(request: AirportsPagedListRequest, delay: number = 500): Observable<ListResponse> {
    return this
      .getAllAirports()
      .delay(delay)
      .map((airports) => _.cloneDeep(airports))
      .map((airports) => this.applyFilters(request, airports))
      .map((airports) => this.applySortings(request, airports))
      .map((airports) => this.applyPaging(request, airports));
  }

  private getAllAirports(): Observable<Airport[]> {
    // we "cache" result since we get all of the items
    if (!this.airportsCache.observers.length) {
      this.airportsCache.complete();
      this.airportsCache = new ReplaySubject<Airport[]>(1);
      this.http.get(this.airportsUrl)
        .map((response) => (response.json().airports as Airport[]))
        .subscribe((data) => this.airportsCache.next(data), (error) => this.airportsCache.error(error));
    }
    return this.airportsCache;
  }

  private applySortings(request: AirportsListRequest, data: Airport[]): Airport[] {
    let fieldNames = request.sortings.map((sort) => (sort.fieldName));
    let directions = request.sortings.map((sort) => (sort.direction === SortDirection.Asc ? 'asc' : 'desc'));
    return _.orderBy(data, fieldNames, directions);
  }

  private applyFilters(request: AirportsListRequest, airports: Airport[]): Airport[] {
    return _.chain(airports)
      .filter((item) => !request.country || (item.countryName || '').toLowerCase().indexOf(request.country.toLowerCase()) !== -1)
      .filter((item) => !request.airportName || item.name.toLowerCase().indexOf(request.airportName.toLowerCase()) !== -1)
      .filter((item) => request.airportSize === null || request.airportSize === undefined || (item.size === null && request.airportSize === '') || item.size === request.airportSize)
      .filter((item) => !request.airportType || item.type === request.airportType)
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
