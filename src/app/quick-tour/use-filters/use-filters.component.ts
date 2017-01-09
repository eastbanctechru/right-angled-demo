import { Component, forwardRef } from '@angular/core';
import { filter, FilterConfig, RTFilterTarget, RTList } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

@Component({
  providers: [
    { provide: RTFilterTarget, useExisting: forwardRef(() => UseFiltersComponent) }
  ],
  selector: 'rt-demo-use-filters',
  templateUrl: 'use-filters.component.html'
})
export class UseFiltersComponent {
  @filter() public airportName: string = null;
  @filter({ defaultValue: 'Iceland', parameterName: 'country' } as FilterConfig) public countryName: string = null;

  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request);
  }
  onListInit(list: RTList): void {
    list.registerFilterTarget(this);
  }
}
