import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';
import { LookupItem } from './lookup-item';

@Injectable()
export class LookupsService {
    constructor(private http: Http) {

    }
    private getAirports(delay: number): Observable<Array<Airport>> {
        let url = './assets/airports.json';
        return this.http.get(url).map(response => (response.json().airports as Array<Airport>)).delay(delay);
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
