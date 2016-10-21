import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-demo-use-row-number',
  templateUrl: 'use-row-number.component.html'
})
export class UseRowNumberComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
  return this.airportsService.getAirportsPagedList(request);
  }
}
