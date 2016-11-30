import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

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
