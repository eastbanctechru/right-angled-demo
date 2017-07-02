import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { isBrowser } from "../../runtime";
import { Airport } from "./airport";
import { AirportsListRequest } from "./airports-list-request";
import { AirportsPagedListRequest } from "./airports-paged-list-request";
import { AirportsResponse } from "./airports-response";
import { ListResponse } from "./list-response";
import { LookupItem } from "./lookup-item";
import { SortDirection, SortParameter } from "./sort-parameter";

@Injectable()
export class AirportsService {
    private airportsUrl: string = "./assets/airports.json";
    private responseCache: ReplaySubject<AirportsResponse> = new ReplaySubject<AirportsResponse>(1);
    constructor(private http: Http) {}
    private getResponse(): Observable<AirportsResponse> {
        // on server return empty data to increase rendering time
        if (!isBrowser) {
            return Observable.of({
                airports: [],
                airportsTree: [],
                countries: [],
                sizes: [],
                types: []
            });
        }
        // we use optional "delay" parameter to simulate backend latency
        // also we "cache" result sunce we get all of the items
        if (!this.responseCache.observers.length) {
            this.responseCache.complete();
            this.responseCache = new ReplaySubject<AirportsResponse>(1);
            this.http
                .get(this.airportsUrl)
                .map(response => response.json() as AirportsResponse)
                .subscribe(data => this.responseCache.next(data), error => this.responseCache.error(error));
        }
        return this.responseCache;
    }

    public getAirportsList(request: AirportsListRequest, delay: number = 600): Observable<Airport[]> {
        return this.getResponse()
            .delay(delay)
            .map(response => response.airports)
            .map(airports => this.applyFilters(request, airports))
            .map(airports => this.applySortings(request, airports))
            .map(airports => airports.slice(0, 5))
            .map(airports => airports.map(airport => ({ ...airport })));
    }
    public getAirportsPagedList(request: AirportsPagedListRequest, delay: number = 600): Observable<ListResponse> {
        return this.getResponse()
            .delay(delay)
            .map(response => response.airports)
            .map(airports => this.applyFilters(request, airports))
            .map(airports => this.applySortings(request, airports))
            .map(airports => this.applyPaging(request, airports))
            .map(response => {
                response.items = response.items.map(airport => ({ ...airport }));
                return response;
            });
    }
    public getAirportsListChunk(request: AirportsPagedListRequest, delay: number = 600): Observable<Airport[]> {
        return this.getResponse()
            .delay(delay)
            .map(response => response.airports)
            .map(airports => this.applyFilters(request, airports))
            .map(airports => this.applySortings(request, airports))
            .map(airports => this.applyPaging(request, airports))
            .map(response => response.items.map(airport => ({ ...airport })));
    }
    public getSomeCountries(countriesCount: number = 5, delay: number = 0): Observable<any[]> {
        return this.getResponse()
            .delay(delay)
            .map(response => response.countries)
            .map(countryNames => countryNames.slice(0, countriesCount).map(countryName => ({ name: countryName })));
    }
    public getRegionsWithCountriesAndAirports(): Observable<any[]> {
        return this.getResponse().map(response =>
            response.airportsTree.map(region => ({
                countries: region.countries.map(country => ({
                    airports: country.airports.map(airport => ({ ...airport })),
                    name: country.name
                })),
                name: region.name
            }))
        );
    }
    public getCountryInfo(countryName: string, delay: number = 0): Observable<any> {
        return this.http
            .get(`https://restcountries.eu/rest/v1/name/${countryName}`)
            .map(response => response.json()[0])
            .delay(delay);
    }
    public getAirportTypeLookups(delay: number = 0): Observable<LookupItem[]> {
        return this.getResponse().delay(delay).map(response => response.types);
    }
    public getAirportSizeLookups(delay: number = 0): Observable<LookupItem[]> {
        return this.getResponse().delay(delay).map(response => response.sizes);
    }

    private applySortings(request: AirportsListRequest, data: Airport[]): Airport[] {
        return request.sortings.length === 0
            ? data
            : data.sort((left, right) => this.sortMultiple(left, right, request.sortings));
    }

    private applyFilters(request: AirportsListRequest, airports: Airport[]): Airport[] {
        return airports
            .filter(
                item =>
                    !request.country ||
                    (item.countryName || "").toLowerCase().indexOf(request.country.toLowerCase()) !== -1
            )
            .filter(
                item =>
                    !request.airportName || item.name.toLowerCase().indexOf(request.airportName.toLowerCase()) !== -1
            )
            .filter(
                item =>
                    request.airportSize === null ||
                    request.airportSize === undefined ||
                    (item.size === null && request.airportSize === "") ||
                    item.size === request.airportSize
            )
            .filter(item => !request.airportType || item.type === request.airportType);
    }
    private applyPaging(request: AirportsPagedListRequest, airports: Airport[]): ListResponse {
        const skip = request.skip || 0;
        const take = request.take || airports.length;
        const resultRecords = airports.slice(skip, skip + take);

        return {
            items: resultRecords,
            loadedCount: resultRecords.length,
            totalCount: airports.length
        } as ListResponse;
    }
    private sortMultiple(left: any, right: any, sortings: SortParameter[]): number {
        let result = 0;
        let index = 0;
        while (index < sortings.length) {
            const sort = sortings[index];
            result = this.compare(left[sort.fieldName], right[sort.fieldName], sort.direction);
            if (result !== 0) {
                return result;
            }
            index++;
        }
        return result;
    }
    private compare(left: any, right: any, direction: SortDirection): number {
        if (left === right) {
            return 0;
        }
        let result;
        if (left === null || left > right) {
            result = 1;
        }
        if (right === null || right > left) {
            result = -1;
        }
        return direction === SortDirection.Asc ? result : result * -1;
    }
}
