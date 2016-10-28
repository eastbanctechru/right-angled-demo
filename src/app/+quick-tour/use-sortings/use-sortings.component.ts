import { Component } from '@angular/core';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-demo-use-sortings',
  templateUrl: 'use-sortings.component.html'
})
export class UseSortingsComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
    return this.airportsService.getAirportsList(request);
  }
}
