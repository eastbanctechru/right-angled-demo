import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-statuses',
  templateUrl: 'use-statuses.component.html'
})
export class UseStatusesComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
    return this.airportsService.getAirportsList(request);
  }
}
