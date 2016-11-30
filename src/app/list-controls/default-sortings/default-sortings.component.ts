import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AirportsPagedListRequest, AirportsService, ListResponse, SortDirection, SortParameter } from '../../shared';

@Component({
  selector: 'rt-demo-default-sortings',
  templateUrl: 'default-sortings.component.html'
})
export class DefaultSortingsComponent {
  public defaultSortings: SortParameter[] = [{ direction: SortDirection.Asc, fieldName: 'name' }, { direction: SortDirection.Desc, fieldName: 'countryName' }];
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request);
  }
}
