import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

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
