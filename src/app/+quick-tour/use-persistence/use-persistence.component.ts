import { Component } from '@angular/core';
import { FilterConfig, RtList, filter } from 'right-angled';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-demo-use-persistence',
  templateUrl: 'use-persistence.component.html'
})
export class UsePersistenceComponent {
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
