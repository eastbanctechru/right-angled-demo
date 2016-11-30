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
  private getAirports(): Observable<Airport[]> {
    // we use optional "delay" parameter to simulate backend latency
    // also we "cache" result sunce we get all of the items
    if (!this.airportsCache.observers.length) {
      this.airportsCache.complete();
      this.airportsCache = new ReplaySubject<Airport[]>(1);
      this.http.get(this.airportsUrl)
        .map((response) => (response.json().airports as Airport[]))
        .subscribe((data) => this.airportsCache.next(data), (error) => this.airportsCache.error(error));
    }
    return this.airportsCache;

  }
  private transformToLookup(data: string[]): LookupItem[] {
    return _.chain(data).map((value) => ({
      key: value === null ? '' : value,
      value: value === null ? '-unspecified-' : value
    } as LookupItem)).concat([{
      key: null,
      value: ''
    } as LookupItem]).orderBy((item) => item.value).value();
  }

  public getAirportTypeLookups(delay: number = 0): Observable<LookupItem[]> {
    return this.getAirports()
      .delay(delay)
      .map((airports) => _.cloneDeep(airports))
      .map((airports) => this.transformToLookup(_.chain(airports).map((item) => item.type).filter((item) => item !== 'closed').uniq().value()));
  }
  public getAirportSizeLookups(delay: number = 0): Observable<LookupItem[]> {
    return this.getAirports()
      .delay(delay)
      .map((airports) => _.cloneDeep(airports))
      .map((airports) => this.transformToLookup(
        _.chain(airports).map((item) => item.size).uniq().value()));
  }
}
