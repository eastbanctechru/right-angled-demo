import { Component, forwardRef } from '@angular/core';
import { filter, FilterConfig, RTFilterTarget, RTStateService } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse, QueryStringStateService } from '../../shared';

@Component({
  providers: [
    { provide: RTStateService, useClass: QueryStringStateService, multi: true },
    { provide: RTFilterTarget, useExisting: forwardRef(() => UsePersistenceComponent) }
  ],
  selector: 'rt-demo-use-persistence',
  templateUrl: 'use-persistence.component.html'
})
export class UsePersistenceComponent {
  @filter() public airportName: string = null;
  @filter({ defaultValue: 'Iceland', parameterName: 'country' } as FilterConfig) public countryName: string = null;

  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request);
  }
}
