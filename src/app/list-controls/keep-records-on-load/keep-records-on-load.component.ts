import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse, SortDirection, SortParameter } from '../../shared';

@Component({
  selector: 'rt-demo-keep-records-on-load',
  templateUrl: 'keep-records-on-load.component.html'
})
export class KeepRecordsOnLoadComponent {
  public keepRecordsOnLoad: boolean = true;
  constructor(private airportsService: AirportsService) {}
  public getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request);
  };
}
