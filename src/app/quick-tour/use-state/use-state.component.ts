import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-state',
  templateUrl: 'use-state.component.html'
})
export class UseStateComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
    return this.airportsService.getAirportsList(request);
  }
}
