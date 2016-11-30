import { Component } from '@angular/core';
import { filter, FilterConfig, RtList } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

@Component({
  selector: 'rt-demo-use-filters',
  templateUrl: 'use-filters.component.html'
})
export class UseFiltersComponent {
  @filter() public airportName: string = null;
  @filter(<FilterConfig>{ defaultValue: 'Iceland', parameterName: 'country' }) public countryName: string = null;

  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request);
  }
  onListInit(list: RtList): void {
    list.registerFilterTarget(this);
  }
}
