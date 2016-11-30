import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

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
