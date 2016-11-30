import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-list',
  templateUrl: 'use-list.component.html'
})
export class UseListComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
    return this.airportsService.getAirportsList(request);
  }
}
