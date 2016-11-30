import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

@Component({
  selector: 'rt-demo-use-rt-list',
  templateUrl: 'use-rt-list.component.html'
})
export class UseRtListComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
  return this.airportsService.getAirportsPagedList(request);
  }
}
