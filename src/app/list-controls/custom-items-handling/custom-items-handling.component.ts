import { Component } from '@angular/core';

import { Airport, AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-demo-custom-items-handling',
  styleUrls: ['custom-items-handling.component.css'],
  templateUrl: 'custom-items-handling.component.html'
})
export class CustomItemsHandlingComponent {
  public myOwnItemsCollection: Array<Airport> = [];
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
    return this.airportsService.getAirportsPagedList(request)
      .do(response => this.myOwnItemsCollection = response.items);
  }
}
