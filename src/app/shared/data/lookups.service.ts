import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Airport } from './airport';
import { LookupItem } from './lookup-item';

@Injectable()
export class LookupsService {
    private airportsUrl: string = './assets/airports.json';
    private airportsCache: ReplaySubject<Airport[]> = new ReplaySubject<Airport[]>(1);
    constructor(private http: Http) {

    }
    private getAirports(delay: number): Observable<Array<Airport>> {
        // we use optional "delay" parameter to simulate backend latency
        // also we "cache" result sunce we get all of the items
        if (!this.airportsCache.observers.length) {
            this.http.get(this.airportsUrl)
                .map(response => (response.json().airports as Airport[]))
                .subscribe(data => this.airportsCache.next(data), error => this.airportsCache.error(error));
        }
        return this.airportsCache.map(airports => _.cloneDeep(airports)).delay(500);

    }
    private transformToLookup(data: Array<string>): Array<LookupItem> {
        return _.chain(data).map(value => ({
            key: value === null ? '' : value,
            value: value === null ? '-unspecified-' : value
        } as LookupItem)).concat([{
            key: null,
            value: ''
        } as LookupItem]).orderBy(item => item.value).value();
    }

    public getCountryLookups(region?: string, delay: number = 0): Observable<Array<LookupItem>> {
        return this.getAirports(delay)
            .map(airports => this.transformToLookup(
                _.chain(airports)
                    .filter(item => !region || item.region === region)
                    .map((item: Airport) => item.countryName).uniq()
                    .value()));
    }
    public getCityLookups(country?: string, delay: number = 0): Observable<Array<LookupItem>> {
        return this.getAirports(delay)
            .map(airports => this.transformToLookup(
                _.chain(airports)
                    .filter(item => !country || item.countryName === country)
                    .map((item: Airport) => item.cityName).uniq()
                    .value()));
    }

    public getAirportTypeLookups(delay: number = 0): Observable<Array<LookupItem>> {
        return this.getAirports(delay).map(airports => this.transformToLookup(_.chain(airports).map(item => item.type).uniq().value()));
    }
    public getAirportSizeLookups(delay: number = 0): Observable<Array<LookupItem>> {
        return this.getAirports(delay).map(airports => this.transformToLookup(_.chain(airports).map(item => item.size).uniq().value()));
    }
    public getRegionLookups(delay: number = 0): Observable<Array<LookupItem>> {
        return this.getAirports(delay).map(airports => this.transformToLookup(_.chain(airports).map((item: Airport) => item.region).uniq().value()));
    }
}
