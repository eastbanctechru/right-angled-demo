import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-demo-use-sortings',
  templateUrl: 'use-sortings.component.html'
})
export class UseSortingsComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
  return this.airportsService.getAirportsPagedList(request);
  }
}
