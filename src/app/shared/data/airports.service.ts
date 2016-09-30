import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { ListRequest, ListResponse, SortDirection } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';
import { AirportsListRequest } from './airports-list-request';
import { LookupItem } from './lookup-item';

@Injectable()
export class AirportsService {
    public static maxPageSize: number = 200;
    constructor(private http: Http) {

    }
    private applyRequest(request: ListRequest, data: Airport[]): ListResponse<Airport> {
        let response = {
            items: null,
            loadedCount: 0,
            totalCount: data.length
        } as ListResponse<Airport>;
        this.applySortings(request, response, data);
        let take = request.take ? (request.take > AirportsService.maxPageSize ? AirportsService.maxPageSize : request.take) : data.length;
        request.skip = request.skip || 0;
        response.items = _.slice(response.items, request.skip, request.skip + take);
        response.loadedCount = response.items.length;
        return response;
    }
    private applySortings(request: ListRequest, response: ListResponse<Airport>, data: Airport[]): ListResponse<Airport> {
        let fieldNames = request.sortings.map(sort => (sort.fieldName));
        let directions = request.sortings.map(sort => (sort.direction === SortDirection.Asc ? 'asc' : 'desc'));
        response.items = _.orderBy(data, fieldNames, directions);
        return response;
    }

    private getFilteredAirports(request: AirportsListRequest, delay: number): Observable<Array<Airport>> {
        return this.getAirports(delay).map(airports => {
            return _.chain(airports)
                .filter(item => !request.airportName || item.name.toLowerCase().indexOf(request.airportName.toLowerCase()) !== -1)
                .filter(item => request.size === null || request.size === undefined || (item.size === null && request.size === '') || item.size === request.size)
                .filter(item => !request.type || item.type === request.type)
                .filter(item => !request.regionName || item.region === request.regionName)
                .filter(item => !request.cityName || item.cityName === request.cityName)
                .filter(item => !request.countryName || item.countryName === request.countryName)
                .forEach(item => { (item as any).selected = false; })
                .value();
        });
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
    private getAirports(delay: number): Observable<Array<Airport>> {
        let url = './assets/airports.json';
        return this.http.get(url).map(response => (response.json().airports as Array<Airport>)).delay(delay)
            // use share to avoid multiple calls by angular async pipes
            .share();
    }

    public getAirportsList(request: AirportsListRequest, delay: number = 500): Observable<ListResponse<Airport>> {
        return this.getFilteredAirports(request, delay).map(airports => this.applyRequest(request, airports));
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
                                        iata: airport.iata,
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
