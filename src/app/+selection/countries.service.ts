import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { Airport } from '../shared/data/airport';

@Injectable()
export class CountriesService {
    private airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    private getAirports(delay: number): Observable<Array<Airport>> {
        return this.http.get(this.airportsUrl).map(response => (response.json().airports as Array<Airport>)).delay(delay)
            // use share to avoid multiple calls by angular async pipes
            .share();
    }

    public getRegions(delay: number = 0): Observable<Array<string>> {
        return this.getAirports(delay)
            .map(airports => _.chain(airports).map((item: Airport) => (item.region)).uniq().value())
            .share();
    }
    public getSomeCountries(countriesCount: number = 5, delay: number = 0): Observable<Array<string>> {
        return this.getAirports(delay)
            .map(airports =>
                _.chain(airports)
                    .map((item: Airport) => (item.countryName))
                    .filter(c => !!c)
                    .uniq()
                    .take(countriesCount)
                    .value())
            .share();
    }
    public getRegionsWithCountriesAndAirports(delay: number = 0): Observable<Array<any>> {
        return this.getAirports(delay).map(airports => (
            _.chain(airports)
                .groupBy(item => item.region)
                .map((groupedByRegion, regionName) => (
                    {
                        countries: _.chain(groupedByRegion).groupBy(item => item.countryName).map((groupedByCountry, countryName) => (
                            {
                                airports: groupedByCountry
                                    .map(airport => ({
                                        iataCode: airport.iataCode,
                                        name: airport.name,
                                        selected: false
                                    })),
                                name: countryName,
                                selected: false
                            }))
                            .filter(country => country.airports.length > 1)
                            .orderBy(country => country.name)
                            .value(),
                        name: regionName,
                        selected: false
                    }))
                .filter(region => region.countries.length > 1)
                .orderBy(region => region.name)
                .value()
        )).share();
    }
    public getCountryInfo(countryName: string, delay: number = 0): Observable<any> {
        return this.http.get(`https://restcountries.eu/rest/v1/name/${countryName}`).map(response => (response.json())).delay(delay);
    }
}
