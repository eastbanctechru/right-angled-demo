import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Airport } from '../shared/data/airport';

@Injectable()
export class CountriesService {
  private airportsUrl: string = './assets/airports.json';
  private airportsCache: ReplaySubject<Airport[]> = new ReplaySubject<Airport[]>(1);
  constructor(private http: Http) {

  }
  private getAirports(): Observable<Airport[]> {
    if (!this.airportsCache.observers.length) {
      this.airportsCache.complete();
      this.airportsCache = new ReplaySubject<Airport[]>(1);
      this.http.get(this.airportsUrl)
        .map((response) => (response.json().airports as Airport[]))
        .subscribe((data) => this.airportsCache.next(data), (error) => this.airportsCache.error(error));
    }
    return this.airportsCache;
  }

  public getSomeCountries(countriesCount: number = 5, delay: number = 0): Observable<any[]> {
    return this.getAirports()
      .delay(delay)
      .map((airports) =>
        _.chain(airports)
          .map((item: Airport) => (item.countryName))
          .filter((c) => !!c)
          .uniq()
          .take(countriesCount)
          .value())
      .map((countryNames) => countryNames.map((countryName) => ({ name: countryName })));
  }
  public getRegionsWithCountriesAndAirports(): Observable<any[]> {
    return this.getAirports()
      .map((airports) => (
        _.chain(airports)
          .groupBy((item) => item.region)
          .map((groupedByRegion, regionName) => (
            {
              countries: _.chain(groupedByRegion).groupBy((item) => item.countryName).map((groupedByCountry, countryName) => (
                {
                  airports: groupedByCountry
                    .map((airport) => ({
                      iataCode: airport.iataCode,
                      name: airport.name,
                      selected: false
                    })),
                  name: countryName,
                  selected: false
                }))
                .filter((country) => country.airports.length > 1)
                .orderBy((country) => country.name)
                .value(),
              name: regionName,
              selected: false
            }))
          .filter((region) => region.countries.length > 1)
          .orderBy((region) => region.name)
          .value()
      ));
  }
  public getCountryInfo(countryName: string, delay: number = 0): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v1/name/${countryName}`).map((response) => (response.json()[0])).delay(delay);
  }
}
