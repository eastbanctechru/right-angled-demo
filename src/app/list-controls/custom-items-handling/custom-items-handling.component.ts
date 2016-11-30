import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';

@Component({
  selector: 'rt-demo-custom-items-handling',
  styleUrls: ['custom-items-handling.component.css'],
  templateUrl: 'custom-items-handling.component.html'
})
export class CustomItemsHandlingComponent {
  public myOwnItemsCollection: Airport[] = [];
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request)
      .do((response) => this.myOwnItemsCollection = response.items);
  }
}
